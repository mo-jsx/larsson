import React from "react";
import { BreadcumberProps } from "types/";

import "./styles.scss";

const Breadcumber = ({ links }: BreadcumberProps[]) => {
    return (
        <div className="breadcumber">
            {links.map((prop: BreadcumberProps, index: number) => {
                return (
                    <span key={index}>
                        <a href={prop.link}>{prop.title}</a> &gt;{" "}
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcumber;
