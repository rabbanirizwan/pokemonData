import React from 'react'
import { UsePokemon } from './FetchPokemon';
import { List, Typography, Divider } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch } from 'react-redux';
import { FetchPokemonData } from "../redux/action/action"
import { Link } from 'react-router-dom';
const Second = () => {
    const { data, isLoading, error } = UsePokemon(null)
    //console.log(data)
    const item = !isLoading && data.map((val, index) => {
        return (
            <p key={index} >{val.name}</p>
        )
    })
    const dispatch = useDispatch();
    return (
        <div>
            {isLoading ? "Loading Data" : <>
                {/* <Divider orientation="left">Default Size</Divider> */}
                {/* <button onClick={() => dispatch({ type: "fetch" })}>Constent</button> */}
                <List
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    bordered={true}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                            <List.Item.Meta
                                // avatar={
                                //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                // }
                                title={item.name}
                            />
                       
                                <Link  onClick={async () => { dispatch(await FetchPokemonData(item.name)) }} to="/third">
                                    Content
                                </Link>

                            




                        </List.Item>
                    )}
                />
            </>}
        </div>
    )
}
export default Second