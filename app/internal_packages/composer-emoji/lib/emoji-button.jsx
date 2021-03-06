import { Actions, React, ReactDOM } from 'mailspring-exports';
import { RetinaImg } from 'mailspring-component-kit';

import EmojiButtonPopover from './emoji-button-popover';

class EmojiButton extends React.Component {
  static displayName = 'EmojiButton';

  onClick = () => {
    const buttonRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    Actions.openPopover(<EmojiButtonPopover />, { originRect: buttonRect, direction: 'up' });
  };

  render() {
    return (
      <button
        tabIndex={-1}
        className="btn btn-toolbar btn-emoji"
        title="Insert emoji…"
        onClick={this.onClick}
      >
        <RetinaImg name="icon-composer-emoji.png" mode={RetinaImg.Mode.ContentIsMask} />
      </button>
    );
  }
}

EmojiButton.containerStyles = {
  order: 2,
};

export default EmojiButton;
