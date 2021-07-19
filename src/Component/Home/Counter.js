import React from 'react';
import CountUp from 'react-countup';

function Counter() {
    return (
        <div className="counterplat">

            <div className="color-white d-flex   container ">
                {/* <h2 className="text-center m-top color-white">We’re committed to deliver High Quality projects
                        </h2> */}
                <div className="col  m-b-t  text-center">
                    <h6>Project  Completion</h6> <br />
                    <h2 className="">  <CountUp end={80} duration={3} /></h2>
                </div>
                <div className="col  m-b-t  color-white  text-center ">
                    <h6>Anual Turn Over</h6><br />
                    <h2 >   <CountUp end={678} duration={6} /> </h2>
                </div>
                <div className="col  m-b-t  color-white text-center">
                    <h6> Total Employees</h6>   <br />
                    <h2>    <CountUp end={1000} duration={4} /> +</h2>
                </div>
                <div className="col  m-b-t  color-white  text-center">
                    <h6>Happy Clients</h6><br />
                    <h2>       <CountUp end={78} duration={5} /> +</h2>
                </div></div>

        </div>
    );
}
export default Counter;