import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../../components/custom-button/custom-button.component';
import { connect } from 'react-redux';

import './pedidos.styles.scss';


class Pedidos extends React.Component {
    constructor() {
        super();
    
        this.state = {
          pedidos: []
        };
    }

    getPedidos = () => {
        fetch('http://localhost:9000/pedidos/'+this.props.currentUser.sucursal)
        .then(res => res.json())
        .then(res => {
            this.setState({pedidos: res.rows})
        })
    }

    deletePedido = (id) => {
        fetch('http://localhost:9000/pedidos/'+id+'&'+this.props.currentUser.sucursal, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        window.location.reload(false);
    }

    concluirPedido = (id) => {
        const id_Sucursal = this.props.currentUser.sucursal
        fetch('http://localhost:9000/pedido/'+id+'&'+id_Sucursal, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                estado: 'P'
            })
        })
        window.location.reload(false);
    }

    componentDidMount() {
        this.getPedidos()
    }

    componentDidUpdate() {
        this.getPedidos()
    }

    render(){
        
    return(
        <div>
            <h1>Registro de Pedidos</h1>
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="cellHeader" align="left">Código</TableCell>
                            <TableCell className="cellHeader" align="left">Fecha</TableCell>
                            <TableCell className="cellHeader" align="left">Hora</TableCell>
                            <TableCell className="cellHeader" align="left">Empleado</TableCell>
                            <TableCell className="cellHeader" align="left">Persona</TableCell>
                            <TableCell className="cellHeader" align="left">Mesa</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.pedidos.map((row,index) => (
                        <TableRow key={row.codigo+index} className="row" >
                            <TableCell className="cell" component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell className="cell" align="left">{row.fecha}</TableCell>
                            <TableCell className="cell" align="left">{row.hora}</TableCell>
                            <TableCell className="cell" align="left">{row.id_empleado}</TableCell>
                            <TableCell className="cell" align="left">{row.id_persona}</TableCell>
                            <TableCell className="cell" align="left">{row.id_mesa}</TableCell>
                            <TableCell className="cell" align="left">
                                <CustomButton type="button" onClick={() => this.deletePedido(row.id)} >
                                    Eliminar
                                </CustomButton>
                            </TableCell>
                            <TableCell className="cell" align="left">
                                <CustomButton type="button" onClick={() => this.concluirPedido(row.id)} >
                                    Concluir
                                </CustomButton>
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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Pedidos);