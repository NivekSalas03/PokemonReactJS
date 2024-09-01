import React, { useEffect, useState } from 'react';
import { Typography, Col, Row, Image, Spin } from 'antd';
import { LeftOutlined } from '@ant-design/icons'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import './TableDetails.css';

export const TableDetails = () => {
    const [loading, setloading] = useState(false)
    const {state} = useLocation()
    const history = useNavigate()
    const {id} = state
    const { Text } = Typography;
    const [pokemon, setPokemon] = useState({})
    const getPokemonById = ()=>{
        setloading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res)=>{
            setPokemon(prev=>({
                ...prev,
                name: res.data["name"],
                image: res.data["sprites"]["front_default"],
                baseExperience:res.data["base_experience"],
                abilities: res.data["abilities"][0]["ability"]["name"],
                height: res.data["height"],
                weight: res.data["weight"],
                move: res.data["moves"][0]["move"]["name"],
                types:res.data["types"][0]["type"]["name"],
                shinyFront:res.data["sprites"]["front_shiny"],
                shinyBack:res.data["sprites"]["back_shiny"],
            }))
            setloading(false)
        })
    }

    const handleBack = () => {
        history('/',{replace: true})
    
      }

    useEffect(() => {
        getPokemonById()
    }, [])

    return(
        <>
        <Spin spinning={loading}>
            <div className='ContentForm'>
               <Text className="TitleForm">Detalle pokemon</Text>
               <div className='Card'>
               <LeftOutlined onClick={handleBack} className="IconBack"/>
               <div>
                        </div>
                    <div className="LoginInformation">
                    <Col
              span={24}
              style={{
                padding: 32,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Row style={{ width: "70%" }}>
                <Col span={24} style={{ marginBottom: 15, paddingLeft: 30 }}>
                  <Text className="Subtitle">{pokemon.name}</Text>
                </Col>
                <Col span={24} style={{ marginBottom: 15, paddingLeft: 30 }}>
                  <Image width={200} preview={{visible:false}} src={`${pokemon.image}`}></Image>
                </Col>
                <Col
                xs={24} xl={8}
                  span={12}
                  className="infoContainer"
                  style={styles.inputContainer}
                >
                  <div
                    style={{
                      backgroundColor: "#F1F3F8",
                      borderRadius: 16,
                      padding: 10,
                      width: "80%",
                      marginBottom: 15,
                    }}
                  >
                <Text className="title">Experiencia básica</Text>

                  </div>
                  <Text className="infoText" style={{ marginBottom: 16 }}>
                        {pokemon.baseExperience}   
                    </Text>
                </Col>
                <Col
                xs={24} xl={8}
                  span={12}
                  className="infoContainer"
                  style={styles.inputContainer}
                >
                  <div
                    style={{
                      backgroundColor: "#F1F3F8",
                      borderRadius: 16,
                      padding: 10,
                      width: "80%",
                      marginBottom: 15,
                    }}
                  >
                    <Text className="title">Habilidades</Text>
                  </div>
                  <Text className="infoText" style={{ marginBottom: 16 }}>
                        {pokemon.abilities}   
                    </Text>
                </Col>
                <Col
                xs={24} xl={8}
                  span={12}
                  className="infoContainer"
                  style={styles.inputContainer}
                >
                  <div
                    style={{
                      backgroundColor: "#F1F3F8",
                      borderRadius: 16,
                      padding: 10,
                      width: "80%",
                      marginBottom: 15,
                    }}
                  >
                    <Text className="title">Altura</Text>
                  </div>
                  <Text className="infoText" style={{ marginBottom: 16 }}>
                        {pokemon.height}   
                    </Text>
                </Col>
                <Col
                xs={24} xl={8}
                  span={12}
                  className="infoContainer"
                  style={styles.inputContainer}
                >
                  <div
                    style={{
                      backgroundColor: "#F1F3F8",
                      borderRadius: 16,
                      padding: 10,
                      width: "80%",
                      marginBottom: 15,
                    }}
                  >
                    <Text className="title">Anchura</Text>
                  
                  </div>
                  <Text className="infoText" style={{ marginBottom: 16 }}>
                        {pokemon.weight}   
                    </Text>
                </Col>
                <Col
                xs={24} xl={8}
                  span={12}
                  className="infoContainer"
                  style={styles.inputContainer}
                >
                  <div
                    style={{
                      backgroundColor: "#F1F3F8",
                      borderRadius: 16,
                      padding: 10,
                      width: "80%",
                      marginBottom: 15,
                    }}
                  >
                        <Text className="title">Movimientos</Text>
                  </div>
                  <Text className="infoText" style={{ marginBottom: 16 }}>
                        {pokemon.move}   
                    </Text>
                </Col>
                <Col
                xs={24} xl={8}
                  span={12}
                  className="infoContainer"
                  style={styles.inputContainer}
                >
                  <div
                    style={{
                      backgroundColor: "#F1F3F8",
                      borderRadius: 16,
                      padding: 10,
                      width: "80%",
                      marginBottom: 15,
                    }}
                  >
                    <Text className="title">Tipo</Text>
                  </div>
                  <Text className="infoText" style={{ marginBottom: 16 }}>
                        {pokemon.types}   
                    </Text>
                </Col>    
                <Col
                xs={24} xl={8}
                  span={12}
                  className="infoContainer"
                  style={styles.inputContainer}
                >
                  <div
                    style={{
                      backgroundColor: "#F1F3F8",
                      borderRadius: 16,
                      padding: 10,
                      width: "80%",
                      marginBottom: 15,
                    }}
                  >
                    <Text className="title">Shiny frontal</Text>
                  </div>
                  <Image width={200} preview={{visible:false}} src={`${pokemon.shinyFront}`}></Image>
                </Col>   
                <Col
                xs={24} xl={8}
                  span={12}
                  className="infoContainer"
                  style={styles.inputContainer}
                >
                  <div
                    style={{
                      backgroundColor: "#F1F3F8",
                      borderRadius: 16,
                      padding: 10,
                      width: "80%",
                      marginBottom: 15,
                    }}
                  >
                    <Text className="title">Shiny espalda</Text>
                  </div>
                  <Image width={200} preview={{visible:false}} src={`${pokemon.shinyBack}`}></Image>
                </Col>   
              </Row>
            </Col>
                    </div>
               </div>
            </div>
            </Spin>
        </>
    )
}

export const styles = {
    inputContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer: {
      width: "auto",
      padding: 15,
      borderRadius: 28,
      paddingRight: 30,
      paddingLeft: 30,
      cursor: "pointer",
    },
    textButton: {
      color: "#FFF",
      fontSize: 15,
    },
    iconButton: {
      color: "#FFF",
      fontSize: 15,
      marginRight: 10,
    },
  };

