import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import './rooms.scss';
import { useEffect, useState } from 'react';
import { getRoomsInfo } from '~/api/api';

function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        (
            async () => {
                await getRoomsInfo().then((data) => {
                    setRooms(data);
                    console.log(data);
                })
            }
        )()
    }, [])

    return (
        <div className="rooms-section">
            <div className="container">
                <div className="rooms-title">Our Rooms</div>
                <div className="d-flex justify-content-center rooms-breadcrumb">
                    <div className="breadcrumb-item">Home</div>
                    <div className="breadcrumb-icon">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div className="breadcrumb-item breadcrumb-active">Rooms</div>
                </div>
                <div className="row align-items-center">
                    {rooms.map((value, index) => (
                        <div className='col-4 p-3'>
                            <div className="rooms-item">
                            <div className="rooms-image">
                                <img src={images.premium_king_1} className="img-fluid"></img>
                            </div>
                            <div className="rooms-name">{value.name}</div>
                            <div className="rooms-price">
                                ${value.price} <span>/ Per{value.per}</span>
                            </div>
                            <div className="d-flex rooms-info">
                                <div className="col-4">Size:</div>
                                <div className="col-8">{value.size}ft</div>
                            </div>
                            <div className="d-flex rooms-info">
                                <div className="col-4">Capacity:</div>
                                <div className="col-8">Max {value.capacity} people</div>
                            </div>
                            <div className="d-flex rooms-info">
                                <div className="col-4">Bed:</div>
                                <div className="col-8">{value.bed}</div>
                            </div>
                            <div className="d-flex rooms-info">
                                <div className="col-4">Services:</div>
                                <div className="col-8">Tea/Coffee, Air Conditioning, WiFi, Television...</div>
                            </div>
                            <div className="rooms-detail">
                                <a className="" href="#">
                                    MORE DETAILS
                                </a>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Rooms;
