import React, { useState } from "react";
import Error from "./Error";
import shordid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCrearGasto }) => {
    // Iniciar el state
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // cuando el usuario agrega un gasto
    const agregarGasto = (e) => {
        e.preventDefault();
        //validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shordid.generate(),
        };

        //pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);
        //reset el form
        setCantidad(0);
        setNombre("");
    };
    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? (
                <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
            ) : null}
            <div className="campo">
                <label htmlFor="">Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={(e) => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                value="Agregar Gasto"
                className="button-primary u-full-width"
            />
        </form>
    );
};
Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
};
export default Formulario;
