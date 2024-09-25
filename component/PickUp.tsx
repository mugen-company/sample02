import { FaCalendarAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function PickUp() {
    return (
        <div className="pickup">

            <h4>ピックアップ / Pickup</h4>


            <div className="pick01">
                <h3>
                    <FaCalendarAlt style={{ marginRight: '10px' }} />
                    診察スケジュール
                </h3>
                <span>Schedules</span>
            </div>
            <div className="pick01">
                <h3>
                    <FaEnvelope style={{ marginRight: '10px' }} />
                    コンタクフォーム
                </h3>
                <span>Contact</span>
            </div>
            <div className="pick01">
                <h3>
                    <FaClock style={{ marginRight: '10px' }} />
                    受付時間
                </h3>
                <span>Reception Time</span>
            </div>
            <div className="pick01">
                <h3>
                    <FaMapMarkerAlt style={{ marginRight: '10px' }} />
                    アクセスMap
                </h3>
                <span>Access</span>
            </div>
        </div>
    );
}
