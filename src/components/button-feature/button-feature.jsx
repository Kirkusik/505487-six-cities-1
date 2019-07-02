import React from 'react';
import PropTypes from 'prop-types';
import {Operation} from '../../reducer/data/data';
import {connect} from 'react-redux';

import {getFavoritesOffers} from '../../reducer/data/selectors';

class ButtonFeature extends React.PureComponent {
  constructor(props) {
    super(props);

    this.addFeatures = this.addFeatures.bind(this);

    this.reloadFavorites = this.reloadFavorites.bind(this);
  }

  addFeatures(id, status) {
    this.props.addFeatures(id, status);
  }
  reloadFavorites() {
    // eslint-disable-next-line no-console
    console.log(`dspch`);
    this.props.reloadFavorites();
  }

  render() {
    const {id, isFavorite, className, svgSize} = this.props;
    return <button
      onClick={() => {
        if (isFavorite) {
          this.addFeatures(id, 0);
          this.reloadFavorites();
        } else {
          this.addFeatures(id, 1);
        }
      }}
      className={`${className} button`}
      type="button">
      <svg className="place-card__bookmark-icon" width={svgSize} height={svgSize}>
        <use xlinkHref={isFavorite ? `#icon-bookmark--active` : `#icon-bookmark`} />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>;
  }
}

const mapStateToProps = (state) => {
  return {
    offers: getFavoritesOffers(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFeatures: (id, status) => dispatch(Operation.addFavoriteHotel(id, status)),
    reloadFavorites: () => dispatch(Operation.reloadFavotiresOffers()),
  };
};

ButtonFeature.propTypes = {
  reloadFavorites: PropTypes.func,
  addFeatures: PropTypes.func,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  className: PropTypes.string,
  svgSize: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFeature);
