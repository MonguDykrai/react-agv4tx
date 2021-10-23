import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Select, Input, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const App = () => {
  const [items, setItems] = useState([
    { name: '设备预热', deletable: false, selected: false },
    { name: '等料', deletable: true, selected: false },
  ]);
  const [selected, setSelected] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const cloned = [...items];
    const selected = cloned.filter((c) => c.selected);
    if (selected.length > 0) {
      setSelected(selected[0].name);
    }
  }, []);

  const getValueProp = () => {
    if (selected === '') return {};
    return { value: selected };
  };

  return (
    <Select
      placeholder="请选择"
      // open={true} // 打开 dropdown
      // defaultValue={items[1].name}
      {...getValueProp()}
      dropdownRender={() => {
        return (
          <div>
            {items.map((item) => (
              <div
                className="select-item-option select-item"
                key={item.name}
                onClick={() => {
                  const cloned = [...items];
                  cloned.forEach((c) => {
                    if (c.name === item.name) {
                      c.selected = true;
                    } else {
                      c.selected = false;
                    }
                  });
                  setItems(cloned);
                }}
              >
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
                {item.selected && (
                  <CheckOutlined
                    style={{ marginLeft: 'auto', color: '#3C7DFF' }}
                  />
                )}
              </div>
            ))}
            <div className="select-dropdown-input">
              <Input
                onPressEnter={(e) => {
                  if (e.keyCode !== 13) return;
                  if (value === '') return;
                  setItems([
                    ...items,
                    {
                      name: value,
                      deletable: false,
                      selected: f,
                    },
                  ]);
                  setValue('');
                }}
                placeholder="请输入"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="add-custom-tag">
              <Button type="primary">自定义标签</Button>
            </div>
            <div className="action-button-group">
              <Button type="ghost">取消</Button>
              <Button
                type="primary"
                onClick={() => {
                  if (value === '') return;
                  setItems([
                    ...items,
                    {
                      name: value,
                      deletable: false,
                      selected: true,
                    },
                  ]);
                }}
              >
                创建
              </Button>
            </div>
            <div className="action-button-group">
              <Button type="ghost">取消</Button>
              <Button
                type="primary"
                onClick={() => {
                  const cloned = [...items];
                  const selected = cloned.filter((c) => c.selected);
                  if (selected.length > 0) {
                    setSelected(selected[0].name);
                  }
                }}
              >
                确认
              </Button>
            </div>
          </div>
        );
      }}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('container'));
