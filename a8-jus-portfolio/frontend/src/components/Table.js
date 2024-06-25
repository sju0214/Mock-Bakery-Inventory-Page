import BakedGoodRow from './BakedGoodRow';
import TableHead from './TableHead';

function Table({ bakedGoods, onDelete, onEdit }) {
    return (
        <table id="Table">
            <caption>Log of current baked goods in inventory.</caption>
            <TableHead />
            <tbody>
                {bakedGoods.map((bakedGood, i) =>
                    <BakedGoodRow
                        bakedGood={bakedGood}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
            <tfoot>
                
            </tfoot>
        </table>
    );
}

export default Table;