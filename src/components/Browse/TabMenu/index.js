import React from 'react';
import { connect } from 'react-redux';
import { setGenre } from '../../../redux/actions/browse';
import { getSelectedGenre } from '../../../redux/selectors/browse';

const TABS = {
  House: 'house',
  Trance: 'trance',
  Techno: 'techno',
  Lofi: 'lofi',
};

const TabMenu = (props) => {
  const { setGenre } = props;
  const { selectedGenre } = props;

  return (
    <div className="tab-menu">
      {Object.keys(TABS).map((tabKey) => (
        <div className="tab-menu__item" key={tabKey}>
          <h3
            className={`tab-menu__item-name ${selectedGenre === TABS[tabKey] ? 'active' : ''}`}
            onClick={() => {
              setGenre(TABS[tabKey]);
            }}
          >
            {tabKey}
          </h3>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const selectedGenre = getSelectedGenre(state);
  return { selectedGenre };
};

const mapDispatchToProps = {
  setGenre,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabMenu);
