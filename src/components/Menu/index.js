import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { TiGroup } from 'react-icons/ti';
import { FaChartPie } from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Menu } from './style';

export default function menu() {
    return (
        <Menu>
            <div id="iconesMenu">
                <Link class="icone" to={`/`}>
                    <GiHouse />
                </Link>
                <Link class="icone" to={`/grafico/`}>
                    <FaChartPie />
                </Link>
                <Link class="icone" to={`/`}>
                    <TiGroup />
                </Link>
            </div>
            <Link class="icone" to={`/`}>
                <FiLogOut />
            </Link>
        </Menu>
    );
}
