import type { Meta, StoryObj } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MosaicAutolayout } from '../';
import './MosaicAutolayout.stories.css';

const meta = {
  title: 'Example/MosaicAutolayout',
  component: MosaicAutolayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    // layout: 'fullscreen',
    viewport: { viewports: MINIMAL_VIEWPORTS },
  },
} satisfies Meta<typeof MosaicAutolayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// prettier-ignore
export const SingleColumn: Story = {
  args: {
    className: 'storybook--mosaic-autolayout-single-column',
    children: [
      <div className="storybook--mosaic-autolayout-child" style={{height: '100px'}}>1</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '200px'}}>2</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '150px'}}>3</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '40px'}}>4</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '140px'}}>5</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '30px'}}>6</div>,
    ],
  },
};

// prettier-ignore
export const MultipleColumns: Story = {
  args: {
    className: 'storybook--mosaic-autolayout-multiple-columns',
    children: [
      <div className="storybook--mosaic-autolayout-child" style={{height: '100px'}}>1</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '200px'}}>2</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '150px'}}>3</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '40px'}}>4</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '140px'}}>5</div>,
      <div className="storybook--mosaic-autolayout-child" style={{height: '30px'}}>6</div>,
    ],
  },
};

// prettier-ignore
export const AsymmetricColumns: Story = {
  args: {
    className: 'storybook--mosaic-autolayout-asymmetric-columns',
    children: [
      <div className="storybook--mosaic-autolayout-text-child">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius lorem risus, ut elementum nunc vehicula volutpat. Ut ut dapibus dolor, sed fringilla erat. Nullam nec velit a est pellentesque sagittis.</div>,
      <div className="storybook--mosaic-autolayout-text-child">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius lorem risus, ut elementum nunc vehicula volutpat.</div>,
      <div className="storybook--mosaic-autolayout-text-child">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dapibus dolor, sed fringilla erat. Nullam nec velit a est pellentesque sagittis.</div>,
      <div className="storybook--mosaic-autolayout-text-child">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>,
      <div className="storybook--mosaic-autolayout-text-child">5. Quisque varius lorem risus, ut elementum nunc vehicula volutpat. Ut ut dapibus dolor, sed fringilla erat. Nullam nec velit a est pellentesque sagittis.</div>,
      <div className="storybook--mosaic-autolayout-text-child">6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius lorem risus, ut elementum nunc vehicula volutpat. Ut ut dapibus dolor, sed fringilla erat. Nullam nec velit a est pellentesque sagittis.</div>,
    ],
  },
};

// prettier-ignore
export const ResponsiveColumns: Story = {
  args: {
    className: 'storybook--mosaic-autolayout-responsive-columns',
    children: [
      <div className="storybook--mosaic-autolayout-text-child">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius lorem risus, ut elementum nunc vehicula volutpat. Ut ut dapibus dolor, sed fringilla erat. Nullam nec velit a est pellentesque sagittis.</div>,
      <div className="storybook--mosaic-autolayout-text-child">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius lorem risus, ut elementum nunc vehicula volutpat.</div>,
      <div className="storybook--mosaic-autolayout-text-child">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dapibus dolor, sed fringilla erat. Nullam nec velit a est pellentesque sagittis.</div>,
      <div className="storybook--mosaic-autolayout-text-child">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>,
      <div className="storybook--mosaic-autolayout-text-child">5. Quisque varius lorem risus, ut elementum nunc vehicula volutpat. Ut ut dapibus dolor, sed fringilla erat. Nullam nec velit a est pellentesque sagittis.</div>,
      <div className="storybook--mosaic-autolayout-text-child">6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius lorem risus, ut elementum nunc vehicula volutpat. Ut ut dapibus dolor, sed fringilla erat. Nullam nec velit a est pellentesque sagittis.</div>,
    ],
  },
};
