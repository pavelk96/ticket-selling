import React, { Component } from 'react';
import OnePlace from "../../../components/seat-selection/one-place"
import "./cinema-hall-container.css";
import {connect} from "react-redux";
import UserInfo from "../../../services/user-info";
import {fetchByuTicket, fetchFilmData} from "../../../actions"
import Spinner from "../../../services/spinner";
import {Button, message, Row, Col, Statistic, Divider} from "antd";
const userInfo = new UserInfo();

class CinemaHallContainer extends Component {

    handleByuTicket = async (filmId, selectedPlaceNumber) => {

        const token = localStorage.getItem("token");
            try {
                if (selectedPlaceNumber.length == 0) {
                    message.error("Не выбраны места для покупки!")
                } else {
                    const data = await userInfo.request('/api/byu-ticket/byu-ticket', 'POST', {filmId, selectedPlaceNumber, token}, {})
                    message.success(data.message)
                }
            } catch (e) {

            }
    };

    componentDidMount() {
        const {fetchByuTicket, fetchFilmData, id } = this.props;
        fetchByuTicket(id);
        fetchFilmData(id);
    }

    state = {
        selectedPlaceNumber: []
    };

    handleSelectedPlace =  (place) => {

        const {selectedPlaceNumber} = this.state;

        const findedIndex = selectedPlaceNumber.findIndex(selectedPlace => selectedPlace === place );

        let arr = [];

        if (findedIndex !== -1) {
            arr = [
                ...selectedPlaceNumber.slice(0, findedIndex),
                ...selectedPlaceNumber.slice(findedIndex + 1)
            ]
        }
        if (findedIndex === -1) {
            arr = [...selectedPlaceNumber, place ];
        }
        this.setState({selectedPlaceNumber: arr});
    };

    renderHallGrid = () => {
        let gridArr = [];
        for (let i = 1; i <= 9; i++) {
            let placeArr = [];
            for (let n =1; n<=10; n++) {
                const place = `${i.toString()}.${n.toString()}`;
                placeArr = [
                    ...placeArr, <OnePlace key={place}
                                           occupiedPlace={place}
                                           place={n.toString()}
                                           buyTicketData={this.props.buyTicketData}
                                           handleSelectedPlace={() => this.handleSelectedPlace(place)}/>
                ];
            }
            gridArr = [...gridArr,<div key={i} >Ряд: {i}{placeArr}</div> ]
        }
        return gridArr;
    };

    render() {
        const style = { padding: '8px 40px' };
        const {id, buyTicketIsLoading, isLoading, filmData} = this.props;
        const {nameRu, posterUrlPreview} = filmData.data || {};

        return (
            <>
                <Row>
                    <Col span={6}> <Divider>{nameRu}</Divider>
                        <Col className="gutter-row" span={6}>
                            <div style={style}><img src={posterUrlPreview}/></div>
                        </Col>
                    </Col>
                    <Col span={12}>                    {
                        (buyTicketIsLoading && isLoading) ? <Spinner/> : <>
                            <div className="container">
                                <img src="http://www.atrium-omsk.ru/images/tpl/screen.png" alt= "img"/>
                                <div className="centered">
                                    {this.renderHallGrid()}
                                    <Button className="btn-buy" type="primary" onClick={() => {this.handleByuTicket(id, this.state.selectedPlaceNumber)}} >Купить</Button>
                                </div>
                            </div>
                        </>
                    }
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Statistic title="Куплено билетов: " value={
                                    this.props?.buyTicketData?.length
                                } />
                            </Col>
                            <Col span={12}>
                                <Statistic title="Свободных мест: " value={
                                     this.props?.buyTicketData?.length ? (100 - this.props?.buyTicketData?.length) : "100"
                                } />
                            </Col>
                        </Row>,
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buyTicketData: state.buyTicketData,
        buyTicketIsLoading: state.buyTicketIsLoading,
        isLoading: state.isLoading,
        filmData: state.filmData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchByuTicket: fetchByuTicket(dispatch),
        fetchFilmData: fetchFilmData(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CinemaHallContainer);