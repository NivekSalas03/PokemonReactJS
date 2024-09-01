import React, { useEffect, useRef, useState } from 'react';
import { Table,Tooltip ,PaginationProps,Button, Typography} from 'antd';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const TablePokemon = () => {
    const { Title } = Typography;
    const navigate =  useNavigate();
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const[columns,setColumns]= useState ([
        {
            title: 'Nombre',
            width: '70%',
            sorter: (a, b) => a.name.localeCompare(b.name),
            render: row => (
              <Tooltip title={`${row.name} ${row.lastName ? row.lastName : ''}`}>
                {row.name} {row.lastName ? row.lastName : ''}
              </Tooltip>
            ),
        },
        {
            title: 'Acciones',
            width: '30%',
            render: row => <><Button type='primary' onClick={()=> handleButton(row)}>Detalle</Button></>,
        },
    ])
    const [dataSource, setDataSource] = useState([]);
    const isMobile = window.innerWidth < 500;
    if (isMobile) {
      columns = this.renderMobileTable(columns);
    }

    const handleButton = (row) => {
        var id = row["url"].split("/")
        navigate('/TableDetail',{state:{id:id[6]}})
    }

    const fetchPokemon = (page)=>{
        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}}&limit=10`).then((res)=>{setDataSource(res.data.results);setLoading(false); setTotalPages(res.data.count)})
    }   

    useEffect(()=>{
        fetchPokemon(0);
    },[])
    return(
        <>
        <div className='TitleForm'>
            <Title >Tabla pokemons</Title>
        </div>
        <div style={{padding: 60}}>
            <Table 
                loading={loading}
                rowKey={record => record.id}
                columns={columns}
                dataSource={dataSource}
                size='small'
                scroll={{ y: '60vh', x: '100%' }}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, total: totalPages, onChange:(page)=>{fetchPokemon(page)}}}
                bordered
            />
        </div>
        </>
    )
}

