import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";
const Pregunta = ({ setRestante, setPresupuesto, setMostrarpregunta }) => {
    // Definir el state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //Función que lee el presupuesto
    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value, 10));
    };

    //Funcion para el envio del formulario
    const agregarPresupuesto = (e) => {
        e.preventDefault();
        //validad
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        //si se pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarpregunta(false);
    };
    return (
        <Fragment>
            <h2>Coloca el presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width "
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
};
Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarpregunta: PropTypes.func.isRequired,
};
export default Pregunta;
