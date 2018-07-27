import React from "react";

import './styles.scss';
import LoadingIcon from "../../assets/images/loading.svg";

const Loading = (props) => <img className="spinner" height={props.height} src={LoadingIcon} alt="Carregando" />;

export default Loading;
