export default function Price() {
    return (
        <div>


            <table className="pricing-table">
                <thead>
                    <tr>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                        <th>日</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="診察内容">内科</td>
                        <td data-label="料金">¥3,000</td>
                        <td data-label="料金">¥3,000</td>
                        <td data-label="料金">¥3,000</td>
                        <td data-label="料金">¥3,000</td>
                        <td data-label="料金">¥3,000</td>
                        <td data-label="料金">¥3,000</td>
                    </tr>
                    <tr>
                        <td data-label="診察内容">外科</td>
                        <td data-label="料金">¥5,000</td>
                        <td data-label="料金">¥5,000</td>
                        <td data-label="料金">¥5,000</td>
                        <td data-label="料金">¥5,000</td>
                        <td data-label="料金">¥5,000</td>
                        <td data-label="料金">¥5,000</td>
                    </tr>
                    <tr>
                        <td data-label="診察内容">小児科</td>
                        <td data-label="料金">¥7,000</td>
                        <td data-label="料金">¥7,000</td>
                        <td data-label="料金">¥7,000</td>
                        <td data-label="料金">¥7,000</td>
                        <td data-label="料金">¥7,000</td>
                        <td data-label="料金">¥7,000</td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
}