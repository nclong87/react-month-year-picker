import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './monthYearPicker.less';

function RenderMonth(props){
  const {
    month, _key, onChangeMonth, selectedMonth
  } = props
  let text = '';
  switch (month) {
    case 1:
      text = 'Jan';
      break;
    case 2:
      text = 'Feb';
      break;
    case 3:
      text = 'Mar';
      break;
    case 4:
      text = 'Apr';
      break;
    case 5:
      text = 'May';
      break;
    case 6:
      text = 'Jun';
      break;
    case 7:
      text = 'Jul';
      break;
    case 8:
      text = 'Aug';
      break;
    case 9:
      text = 'Sep';
      break;
    case 10:
      text = 'Oct';
      break;
    case 11:
      text = 'Nov';
      break;
    case 12:
      text = 'Dec';
      break;
    default:
      break;
  }
  const className = selectedMonth === month ? 'selected' : '';
  return (
    <div key={_key ? _key : ''} className={className} role="button" tabIndex={0} onClick={() => onChangeMonth(month)}><span>{text}</span></div>
  );
}
class MonthYearPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        allMonths: [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    }
  }

  handleOnClickLeftArrow = () => {
    if (this.props.selectedYear <= this.props.minYear) {
      return;
    }
    this.props.onChangeYear(this.props.selectedYear - 1);
  }

  handleOnClickRightArrow = () => {
    if (this.props.selectedYear >= this.props.maxYear) {
      return;
    }
    this.props.onChangeYear(this.props.selectedYear + 1);
  }

  renderLeftArrowButton() {
    if (this.props.selectedYear === this.props.minYear) {
      return <i className="fa fa-chevron-left disabled"></i>;
    }
    return <i role="button" tabIndex={0} onClick={this.handleOnClickLeftArrow} className="fa fa-chevron-left"></i>;
  }

  renderRightArrowButton() {
    if (this.props.selectedYear === this.props.maxYear) {
      return <i className="fa fa-chevron-right disabled"></i>;
    }
    return <i role="button" tabIndex={0} onClick={this.handleOnClickRightArrow} className="fa fa-chevron-right"></i>;
  }


  renderSingleMonth = (monthlist, mainIndex, type) => {
    const {
        maxMonth
      } = this.props;
      return monthlist.map((month, index) => {
        if(month <= maxMonth){
            return <RenderMonth
            key={`picker${mainIndex}_${index}`}
            _key={`month_picker${mainIndex}_${index}`}
            month={month}
            onChangeMonth={this.props.onChangeMonth}
            selectedMonth={this.props.selectedMonth}
            />
        }
    })
  }
  renderMonths = () => {
        return this.state.allMonths.map((monthlist, mainIndex) => {
          return (
            <div key={`month_picker_section_${mainIndex}`}>
                { this.renderSingleMonth(monthlist, mainIndex) }
            </div>
          )
        });
  }

  renderNormalMonths = () => {
    return this.state.allMonths.map( (monthlyList, mainIndex) => {
      return (
        <div key={`month_picker_section_${mainIndex}`}>
            { this.renderNormalSingleMonth(monthlyList, mainIndex) }
        </div>
      )
    })
  }
  renderNormalSingleMonth = (monthlyList, mainIndex) => {
    return monthlyList.map( (month, index) => {
      return <RenderMonth
      key={`picker${mainIndex}_${index}`}
      _key={`month_picker${mainIndex}_${index}`}
      month={month}
      onChangeMonth={this.props.onChangeMonth}
      selectedMonth={this.props.selectedMonth}
      />
    })
  }
  render() {
    return (
      <div className="month-year-picker">
        <div className="month-year-picker-section">
          <div className="year-picker">
           <span><b>Selected Year: </b>{this.props.selectedYear}</span>
            <div className="controls">
              {this.renderLeftArrowButton()}
              {this.renderRightArrowButton()}
            </div>
          </div>
              {
                  this.props.maxYear === this.props.selectedYear ?
                  <div className="month-picker">
                    { this.renderMonths() }
                  </div>
                  : 
                  <div className="month-picker">
                    { this.renderNormalMonths()}
                  </div>
              }
        </div>
      </div>
    );
  }
}

MonthYearPicker.propTypes = {
  caption: PropTypes.string,
  selectedYear: PropTypes.number.isRequired,
  selectedMonth: PropTypes.number.isRequired,
  minYear: PropTypes.number.isRequired,
  maxYear: PropTypes.number.isRequired,
  maxMonth: PropTypes.number.isRequired,
  onChangeYear: PropTypes.func.isRequired,
  onChangeMonth: PropTypes.func.isRequired,
};

MonthYearPicker.defaultProps = {
  caption: 'Select month and year',
};

export default MonthYearPicker;
