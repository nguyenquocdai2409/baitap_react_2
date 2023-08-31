import React, { Component } from 'react'
import { glassesArr } from './dataGlasses'

export default class RenderWithMap extends Component {
    state = {
            name: "",
            url: "",
            desc: "",
    };
    handleChangeModel = (_name,_url,_desc) =>{
        this.setState({
            name:_name,
            url: _url,
            desc: _desc,
        });
    };
    renderListGlasses = () => {
        return glassesArr.map((item, index) => {
            let { name, url, desc} =item;
            return (
                <div className="card text-left col-3">
                <img
                onClick={()=>{
                    this.handleChangeModel(name,url,desc);
                }}
                key={index}
                className="card-img-top" src={url} alt />
                <div className="card-body">
                    <p className="card-text"></p>
                </div>
            </div>
            );
        });
    };
    render() {
        return (
              <div style={{ backgroundColor: `rgba(0, 0, 0, 0.8)`, height: "100vh" }}>
                <div className="container">
                  <div className="row justify-content-between mb-5 ">
                    <div
                      className="col-4"
                      style={{
                        backgroundImage: `url(./glassesImage/model.jpg)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "top center",
                        height: "50vh",
                      }}
                    ></div>
                    <div
                      className="col-4"
                      style={{
                        backgroundImage: `url(./glassesImage/model.jpg)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "top center",
                        height: "50vh",
                        position: "relative",
                      }}
                    >
                      <img
                        src={this.state.url}
                        style={{
                          position: "absolute",
                          width: "40%",
                          top: "25%",
                          left: "30%",
                          opacity: "0.8",
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: `rgba(255, 200, 224, 0.6)`,
                          position: "absolute",
                          left: "45px",
                          right: "45px",
                          top: "70%",
                          bottom: "0px",
                        }}
                      >
                        <div className="text-left p-3">
                          <h4>{this.state.name}</h4>
                          <p>{this.state.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row mb-5 p-3"
                    style={{ backgroundColor: "white", height: "150px" }}
                  >
                    <div className="row">{this.renderListGlasses()}</div>
                  </div>
                </div>
              </div>
          );
        }
    }
