// @flow
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import Video from './Video';

const mapStateToProps = (state: Store): VideoStore => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    editThisFunction() {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  injectIntl(Video),
);
