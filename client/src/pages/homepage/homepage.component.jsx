import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';

import './homepage.styles.scss';


class Homepage extends React.Component {
    constructor() {
        super();
    
        this.state = {
          personas: [],
          correos: [],
          telefonos: []
        };
    }

    getPersonas = () => {
        fetch("http://localhost:9000/persona")
        .then(res => res.json())
        .then(res => {
            this.setState({personas: res.rows})
        })
    }

    getCorreos = () => {
        fetch("http://localhost:9000/correo")
        .then(res => res.json())
        .then(res => {
            this.setState({correos: res.rows})
        })
    }

    getTelefonos = () => {
        fetch("http://localhost:9000/telefono")
        .then(res => res.json())
        .then(res => {
            this.setState({telefonos: res.rows})
        })
    }

    deletePersona = (codigo) => {
        fetch('http://localhost:9000/persona/'+codigo, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        window.location.reload(false);
    }

    deleteCorreo = (codigo,correo) => {
        fetch('http://localhost:9000/correo/'+codigo+'&'+correo, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        window.location.reload(false);
    }

    deleteTelefono = (codigo,numero) => {
        fetch('http://localhost:9000/telefono/'+codigo+'&'+numero, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        window.location.reload(false);
    }

    componentDidMount() {
        this.getPersonas()
        this.getCorreos()
        this.getTelefonos()
    }

    render(){
    return(
        <div>
            <h1>Tabla de personas</h1>
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="cellHeader">Código</TableCell>
                            <TableCell className="cellHeader" align="right">Nombres</TableCell>
                            <TableCell className="cellHeader" align="right">Apellidos</TableCell>
                            <TableCell className="cellHeader" align="right">Fecha de nacimiento</TableCell>
                            <TableCell className="cellHeader" align="right">Domicilio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.personas.map((row,index) => (
                        <TableRow key={row.codigo+index} className="row" >
                            <TableCell className="cell" component="th" scope="row">
                                {row.codigo}
                            </TableCell>
                            <TableCell className="cell" align="right">{row.nombres}</TableCell>
                            <TableCell className="cell" align="right">{row.apellidos}</TableCell>
                            <TableCell className="cell" align="right">{row.fecha_nacimiento}</TableCell>
                            <TableCell className="cell" align="right">{row.domicilio}</TableCell>
                            <TableCell className="cell" align="right">
                                <CustomButton type="button" onClick={() => this.deletePersona(row.codigo)} >
                                    Eliminar
                                </CustomButton>
                            </TableCell>
                            <TableCell>
                                <Link to={ { pathname: '/editPersona', query: {row} } }>
                                    <CustomButton type="button">
                                        Editar
                                    </CustomButton>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h1>Tabla de correos electrónicos</h1>
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="cellHeader">Código</TableCell>
                            <TableCell className="cellHeader" align="right">Correo electrónico</TableCell>
                            <TableCell className="cellHeader" align="right">Tipo de uso</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.correos.map((row,index) => (
                        <TableRow key={row.persona_codigo+100+index} className="row">
                        <TableCell className="cell" component="th" scope="row">
                            {row.persona_codigo}
                        </TableCell>
                        <TableCell className="cell" align="right">{row.correo}</TableCell>
                        <TableCell className="cell" align="right">{row.tipo}</TableCell>
                        <TableCell className="cell" align="right">
                                <CustomButton type="button" onClick={() => this.deleteCorreo(row.persona_codigo,row.correo)} >
                                    Eliminar
                                </CustomButton>
                        </TableCell>
                        <TableCell>
                                <Link to={ { pathname: '/editCorreo', query: {row} } }>
                                    <CustomButton type="button">
                                        Editar
                                    </CustomButton>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h1>Tabla de números</h1>
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="cellHeader">Código</TableCell>
                            <TableCell className="cellHeader" align="right">Número</TableCell>
                            <TableCell className="cellHeader" align="right">Tipo de uso</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.telefonos.map((row,index) => (
                        <TableRow key={row.persona_codigo+200+index} className="row">
                        <TableCell className="cell" component="th" scope="row">
                            {row.persona_codigo}
                        </TableCell>
                        <TableCell className="cell" align="right">{row.telefono_numero}</TableCell>
                        <TableCell className="cell" align="right">{row.tipo}</TableCell>
                        <TableCell className="cell" align="right">
                                <CustomButton type="button" onClick={() => this.deleteTelefono(row.persona_codigo,row.telefono_numero)} >
                                    Eliminar
                                </CustomButton>
                        </TableCell>
                        <TableCell>
                                <Link to={ { pathname: '/editTelefono', query: {row} } }>
                                    <CustomButton type="button">
                                        Editar
                                    </CustomButton>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
    }
}

export default Homepage;
