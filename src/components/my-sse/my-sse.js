
import React from "react";
import ReactEventSource from "react-eventsource";



const MySse = () => {
  return (
    <ReactEventSource  url="https://stream.wikimedia.org/v2/stream/recentchange">
      {events => {
        events.reverse();
        return (
          <div>
            <p>
              <b>{events.length} events</b>
            </p>
            {events.map((e, i) => {
              const data = JSON.parse(e);
              return <div key={i}>{data.user}</div>;
            })}
          </div>
        );
      }}
    </ReactEventSource>
  );
};

export default MySse ;