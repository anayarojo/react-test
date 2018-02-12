import React from 'react'
import "../../../css/pages/components/home-layout.css"

function HomeLayout(props){
    return (
        <section className="home-layout">
            {props.children}
        </section>
    )
}

export default HomeLayout;


