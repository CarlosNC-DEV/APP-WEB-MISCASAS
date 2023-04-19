import React from 'react';
import NavbarLandig from '../components/NavbarLandig';
import ModalLoginUsuarios from '../components/ModalLoginUsuarios';
import ModalLoginAdmin from '../components/ModalLoginAdmin';
import './layouts.css'

const Landing = () => {
    return (
        <div className='home vh-100'>
            <NavbarLandig></NavbarLandig>
            <div className="mt-5">
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate">
                            <h2 className="subheading">Bienvenidos a Mis Casas</h2>
                            <h1 className="mb-4">Nuestro compromiso es ayudarte a encontrar el hogar que siempre has soñado</h1>
                            <p><a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#usuariosModal">Quiero Ir</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <ModalLoginUsuarios></ModalLoginUsuarios>
            <ModalLoginAdmin></ModalLoginAdmin>
        </div>
    );
}

export default Landing;
