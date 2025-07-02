import React from 'react';

const TitlePage=()=>{
return (
    <div className="page-title" style={{backgroundImage:"url('images/section/page-title.jpg')"}}>
            <div className="container-full">
                <div className="row">
                    <div className="col-12">
                        <h3 className="heading text-center">Women</h3>
                        <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                            <li>
                                <a className="link" href="index.html">Homepage</a>
                            </li>
                            <li>
                                <i className="icon-arrRight"></i>
                            </li>
                            <li>
                                Women
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}
export default TitlePage;