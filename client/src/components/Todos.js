import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Todos = () => {
    const [recordatorios, setRecordatorios] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/recordatorios")
            .then(res => setRecordatorios(res.data))
            .catch(err => console.log(err));
    }, [])

    const borrar = id => {
        axios.delete("http://localhost:8000/api/recordatorios/"+id)
        .then(res => {
            let nuevaLista = recordatorios.filter(rec => rec._id !== id);
            setRecordatorios(nuevaLista);
        })
        .catch(err=>console.log(err));
    }

    return(
        <div>
            <h1>Tus Pendientes</h1>
            <Link to="/nuevo" className='btn btn-success'>Nuevo +</Link>
            <div className='row'>
                {
                    recordatorios.map((rec, index) =>(
                        <div className='card col-3' key={index}>
                            <h2>{rec.titulo}</h2>
                            <p>{rec.contenido}</p>
                            <Link className="btn btn-warning" to={`/editar/${rec._id}`}>Editar</Link>
                            <button className='btn btn-info'onClick={()=>borrar(rec._id)}>¡Hecho!</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todos;