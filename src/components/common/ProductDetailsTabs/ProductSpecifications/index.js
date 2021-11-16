import React from 'react';
import {Table, TableBody, TableCell, TableRow} from '@material-ui/core';

const ProductSpecifications = () => {
    return (
        <Table sx={{minWidth: 650}} aria-label='simple table'>
            <TableBody>
                <TableRow>
                    <TableCell>Размеры</TableCell>
                    <TableCell>146.7 х 71.5 х 7.4 мм</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Год выпуска</TableCell>
                    <TableCell>2020</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Гарантия</TableCell>
                    <TableCell> 3 мес</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Дополнительные технологии</TableCell>
                    <TableCell> Face ID, LiDAR сканер, Барометр, Трехосный гироскоп, Акселерометр, Датчик приближения,
                        Датчик освещенности</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Дисплей</TableCell>
                    <TableCell>6.1"</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Тип дисплея</TableCell>
                    <TableCell>OLED</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Количество цветов дисплея</TableCell>
                    <TableCell>16 млн</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Устойчивое к царапинам стекло</TableCell>
                    <TableCell>Да</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Встроенная камера</TableCell>
                    <TableCell> Система камер Pro 12MP: сверхширокоугольная, широкоугольная и телеобъектив</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Smart & Fan</TableCell>
                    <TableCell>Да</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Влагозащита</TableCell>
                    <TableCell>IP68</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Объем оперативной памяти</TableCell>
                    <TableCell>4 Гб</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};
export default ProductSpecifications;