# react-month-year-picker

> ReactJs component for selecting month and year

[![NPM](https://img.shields.io/npm/v/react-month-year-picker.svg)](https://www.npmjs.com/package/react-month-year-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Screenshot](https://i.imgur.com/qxiKKOa.png)

## Install

```bash
npm install --save react-month-year-picker
```

## Usage

```jsx
import React, { Component } from 'react';

import MonthYearPicker from 'react-month-year-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 10,
      year: 2018,
    };
  }
  render() {
    return (
      <div>
        <MonthYearPicker
          selectedMonth={this.state.month}
          selectedYear={this.state.year}
          minYear={2000}
          maxYear={2030}
          onChangeYear={year => this.setState({ year: year })}
          onChangeMonth={month => this.setState({ month: month })}
        />
        <h3>Selected month: {this.state.month}</h3>
        <h3>Selected year: {this.state.year}</h3>
      </div>
    );
  }
}
```

## Run demo

```bash
npm run build
cd example
npm start
```

## License

MIT © [nclong87](https://github.com/nclong87)
