import { Component } from "react";
import Error404 from "./404/Error404";

export default class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError');
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
        //TODO logging
    }

    render() {
        if (this.state.hasError) {
            return <Error404 />;
        }

        return this.props.children;
    }
}