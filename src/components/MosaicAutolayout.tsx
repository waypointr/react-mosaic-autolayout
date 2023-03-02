import {
  ReactElement,
  Fragment,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { min } from './min';
import { debounce } from './debounce';

import './MosaicAutolayout.css';

export interface MosaicAutolayoutProps {
  className?: string;
  debounceDelay?: number;
  children: ReactElement[];
}

function getContainerClassName(additionalClassName: string | undefined | null) {
  return `mosaic-autolayout-container ${additionalClassName ?? ''}`.trim();
}

const MosaicAutolayout = (props: MosaicAutolayoutProps) => {
  const { className, children, debounceDelay = 100 } = props;

  const gridRef = useRef<HTMLDivElement>(null);
  const [columnChildren, setColumnChildren] = useState(
    Array<Array<ReactElement>>()
  );

  useLayoutEffect(() => {
    const resizeListener = () => {
      if (!gridRef.current) {
        return;
      }
      const gridStyle = window?.getComputedStyle(gridRef.current as Element);
      const columnStyle = gridStyle?.getPropertyValue('grid-template-columns');
      const columnCount = columnStyle?.split(' ').length ?? 1;

      const columns = Array(columnCount)
        .fill(null)
        .map((x) => ({
          currentHeight: 0,
          children: Array<ReactElement>(),
          column: document.createElement('div'),
        }));

      const shadowContainer = document.createElement('div');
      shadowContainer.className = getContainerClassName(className);
      Object.assign(shadowContainer.style, {
        width: gridStyle?.getPropertyValue('width'),
        gridTemplateColumns: columnStyle,
        position: 'absolute',
        left: '-100000px',
        visibility: 'hidden',
      });
      gridRef.current?.parentNode?.insertBefore(
        shadowContainer,
        gridRef.current
      );

      columns.forEach((c) => {
        shadowContainer
          .appendChild(document.createElement('div'))
          .appendChild(c.column);
      });
      children.forEach((child) => {
        const template = document.createElement('template');
        template.innerHTML = renderToStaticMarkup(child).trim();
        const childElem = template.content.firstChild;
        const nextColumn = min(columns, (col) => col.column.offsetHeight);

        if (childElem !== null) {
          nextColumn?.children.push(child);
          nextColumn?.column.appendChild(childElem);
        }
      });

      shadowContainer.remove();

      setColumnChildren(columns.map((c) => c.children));
    };

    resizeListener();
    const debouncedResizeListener = debounce(resizeListener, debounceDelay);

    window.addEventListener('resize', debouncedResizeListener);

    return () => window.removeEventListener('resize', debouncedResizeListener);
  }, [gridRef, debounceDelay, min, children]);

  return (
    <div className={getContainerClassName(className)} ref={gridRef}>
      {columnChildren.map((childs, i) => (
        <div key={i} className="mosaic-autolayout-column">
          {childs.map((c, j) => (
            <Fragment key={j}>{c}</Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MosaicAutolayout;
