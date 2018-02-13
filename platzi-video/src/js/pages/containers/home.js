import React, { Component } from 'react'
import HomeLayout from "../components/home-layout"
import Categories from "../../categories/components/categories"
import Related from "../../pages/components/related"
import ModalContainer from "../../widgets/containers/modal-container"
import Modal from "../../widgets/components/modal"
import HandleError from "../../errors/containers/handle-error"
import VideoPlayer from "../../player/containers/video-player"

class Home extends Component {
    state = {
        modalVisible: false,
    }
    handleOpenModalClick = (event) => {
        this.setState({
            modalVisible: true,
        })
    }
    handleCloseModalClick = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
    render() {
        return (
            <div>
                <HandleError>
                    <HomeLayout>
                        <Related />
                        <VideoPlayer
                            autoplay={true}
                        />
                        <Categories 
                            categories={this.props.data.categories}
                            handleOpenModalClick={this.handleOpenModalClick}
                        />
                        {
                            this.state.modalVisible &&
                            <ModalContainer>
                                <Modal handleClick={this.handleCloseModalClick}>
                                    <h1>Esto es un portal</h1>
                                </Modal>
                            </ModalContainer>
                        }
                    </HomeLayout>
                </HandleError>
            </div>
        )
    }
}

export default Home;
