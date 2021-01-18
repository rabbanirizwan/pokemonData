import React from 'react';
import { useFetchUser } from './FetchUser';
import { List, Typography, Divider } from 'antd';
const First = () => {
    const { data, error, loading } = useFetchUser(null)
    // const item = !loading && data.map((val,index)=>{
    //     return(
    //       <Table key={index} 
    //       columns={[{title:"ID",dataIndex:"id"},{title:"Title",dataIndex:"title"}]}
    //       dataSource={val}
    //       />
    //     )
    // })
    return (
        <div>
            {loading ? "LOADING DATA" : <>
                <Divider orientation="left">Default Size</Divider>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered={true}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            {item.title}
                        </List.Item>
                    )}
                />
            </>}

        </div>
    )
}
export default First