import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './show_room.scss';
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { getRoomInfo } from '~/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function ShowRoom() {
    const [room, setRoom] = useState([]);
    const { category } = useParams();
    console.log(category);

    useEffect(() => {
        (async () => {
            await getRoomInfo(category).then((data) => {
                setRoom(data);
                console.log(data);
            });
        })();
    }, []);

    return (
        <div className="show-room-section">
            <div className="room-breadcrumb">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <a href="../" className="breadcrumb-item">
                            Home
                        </a>
                        <div className="breadcrumb-icon">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <a href='./' className="breadcrumb-item">Rooms</a>
                        <div className="breadcrumb-icon">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="breadcrumb-item breadcrumb-active">Slug</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="d-flex pt-4">
                    <div className="col-6">
                        <div className="room-carousel">
                            <div className="room-images">
                                <div className="room-image">
                                    <img src={images.premium_king_1} className="img-fluid"></img>
                                </div>
                                <div className="room-image">
                                    <img src={images.premium_king_2} className="img-fluid"></img>
                                </div>
                                <div className="room-image">
                                    <img src={images.premium_king_3} className="img-fluid"></img>
                                </div>
                                <div className="room-image">
                                    <img src={images.premium_king_4} className="img-fluid"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="room-info">
                            <div className="d-flex">
                                <div className="room-slug">{room.slug}</div>
                                <div className="d-flex align-items-center room-star">
                                    <div className="room-star-active">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div className="room-name">{room.name}</div>
                            <div className="room-price">
                                ${room.price} <span>/ Per{room.per}</span>
                            </div>
                            <div className="d-flex room-text">
                                <div className="col-3">Size:</div>
                                <div className="col-9">{room.size}ft</div>
                            </div>
                            <div className="d-flex room-text">
                                <div className="col-3">Capacity:</div>
                                <div className="col-9">Max {room.capacity} people</div>
                            </div>
                            <div className="d-flex room-text">
                                <div className="col-3">Bed:</div>
                                <div className="col-9">{room.bed}</div>
                            </div>
                            <div className="d-flex room-text">
                                <div className="col-3">Services:</div>
                                <div className="col-9">{room.service}</div>
                            </div>
                            <div className="d-flex room-text">
                                <div className="col-3">Description:</div>
                                <div className="col-9">{room.description}</div>
                            </div>
                            <div className="d-flex room-date">
                                <div className="col-6 pe-3">
                                    <div class="form-group">
                                        <label for="input_from" className="pb-2 room-title">
                                            Checkin
                                        </label>
                                        <input type="datetime-local" className="form-control room-input-date"></input>
                                    </div>
                                </div>
                                <div className="col-6 ps-3">
                                    <div class="form-group">
                                        <label for="input_from" className="pb-2 room-title">
                                            Checkout
                                        </label>
                                        <input type="datetime-local" className="form-control room-input-date"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowRoom;
