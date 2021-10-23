import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Select, Input, Button } from 'antd';

const { Option } = Select;

let index = 0;

class App extends React.Component {
  state = {
    items: [
      { name: '设备预热', deletable: false, selected: true },
      { name: '等料', deletable: true, selected: false },
    ],
    name: '',
  };

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  addItem = () => {
    console.log('addItem');
    const { items, name } = this.state;
    this.setState({
      items: [...items, name || `New item ${index++}`],
      name: '',
    });
  };

  render() {
    const { items, name } = this.state;
    return (
      <Select
        defaultValue={this.state.items[1].name}
        dropdownRender={(menu) => {
          console.log(menu); // props.options 为 [{key: '2', value: '2', children: '3'}] 即 <Option key={2}>3</Option>
          return (
            <div>
              {/* {menu} */}
              {items.map((item) => (
                // deletable
                <div className="select-item-option select-item" key={item.name}>
                  {item.name}
                </div>
              ))}
              <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                <Input
                  placeholder="请输入"
                  style={{
                    flex: 'auto',
                    background: '#23284D',
                    borderRadius: 4,
                    height: 40,
                    width: 160,
                    // color: '#fff',
                    // borderColor: 'transparent',
                  }}
                  value={name}
                  onChange={this.onNameChange}
                />
              </div>
              <div>
                <Button type="ghost">取消</Button>
                <Button type="primary">创建</Button>
              </div>
            </div>
          );
        }}
      >
        {/* {items.map((item) => {
          return <span>{item}</span>;
        })} */}
        {/* <Option key={2}>3</Option> */}
        {/* {items.map((item) => (
          <Option key={item}>{item}</Option>
        ))} */}
      </Select>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
