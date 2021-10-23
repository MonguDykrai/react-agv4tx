import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Select, Input, Button } from 'antd';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
const { Option } = Select; // ok

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
        open={true} // 打开 dropdown
        defaultValue={this.state.items[1].name}
        dropdownRender={(menu) => {
          console.log(menu); // props.options 为 [{key: '2', value: '2', children: '3'}] 即 <Option key={2}>3</Option>
          return (
            <div>
              {/* {menu} */}
              {items.map((item) => (
                // deletable
                <div className="select-item-option select-item" key={item.name}>
                  {/* <DeleteOutlined style={{ marginRight: 10 }} /> */}
                  <span style={{ marginRight: 1 }}>
                    <svg
                      t="1635005909243"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1215"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M649.824 604.576a31.968 31.968 0 1 1-45.248 45.248L505.6 550.848l-98.976 98.976a31.904 31.904 0 0 1-45.248 0 32 32 0 0 1 0-45.248l98.976-98.976-98.976-98.976a32 32 0 0 1 45.248-45.248l98.976 98.976 98.976-98.976a32 32 0 0 1 45.248 45.248L550.848 505.6l98.976 98.976zM512 128C300.288 128 128 300.288 128 512c0 211.744 172.288 384 384 384 211.744 0 384-172.256 384-384 0-211.712-172.256-384-384-384z"
                        p-id="1216"
                        fill="#6B6F8D"
                      ></path>
                    </svg>
                  </span>
                  {item.name}
                  <CheckOutlined
                    style={{ marginLeft: 'auto', color: '#3C7DFF' }}
                  />
                </div>
              ))}
              <div className="select-dropdown-input">
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
              <div className="add-custom-tag">
                <Button type="primary">自定义标签</Button>
              </div>
              <div className="action-button-group">
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
