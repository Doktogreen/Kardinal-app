import React, { useState } from "react";
// import {
//   Button,
//   Input,
//   Footer,
//   Card,
//   CardBody,
//   CardImage,
//   CardTitle,
//   CardText
// } from "mdbreact";

export function Search(props){
    const [search, setSearch] = useState("");

  renderItem = list => {
    /*if( search !== "" && list.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <>
        {/* <Card>
          <CardBody>
            <p className="">
              <img
                src={blankImg}
                className={"flag flag-" + code}
                alt={country.name}
              />
            </p>
            <CardTitle title={country.name}>
              {country.name.substring(0, 15)}
              {country.name.length > 15 && "..."}
            </CardTitle>
          </CardBody>
        </Card> */}
        {props.component}
      </>
    );
  };

  onchange = e => {
    setSearch({ search: e.target.value });
  };
    const filteredLists = props.list.filter(data => {
      return data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
          <div className="container">
              <div className="col">
                <input
                  label="Search"
                  icon="search"
                  onChange={onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredLists.indexOf(() => {
                return renderItem;
              })}
            </div>
          </div>
    );
  }

export default App;
