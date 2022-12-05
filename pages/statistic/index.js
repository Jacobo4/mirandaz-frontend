import Card from "@components/Card/Card";
import {BsSearch} from "react-icons/bs";
import {useEffect, useState, useRef} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Chart from 'chart.js/auto';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())


const Statistic = () => {
    const [eventCenter, setEventCenter] = useState([]);
    const [party, setParty] = useState([]);
    const [isDone, setIsDone] = useState(false);

    const {data: parties, error1} = useSwr(`/api/twitter/parties/`, fetcher);

    parties && console.log(parties);

    const canvasEl = useRef(null);
    const canvasEl2 = useRef(null);

    const colors = {
        purple: {
            default: "rgba(149, 76, 233, 1)",
            half: "rgba(149, 76, 233, 0.5)",
            quarter: "rgba(149, 76, 233, 0.25)",
            zero: "rgba(149, 76, 233, 0)"
        },
        indigo: {
            default: "rgba(80, 102, 120, 1)",
            quarter: "rgba(80, 102, 120, 0.25)"
        }
    };

    useEffect(() => {

        const ctx2 = canvasEl2.current.getContext("2d");
        const gradient2 = ctx2.createLinearGradient(0, 16, 0, 600);
        gradient2.addColorStop(0, colors.purple.half);
        gradient2.addColorStop(0.65, colors.purple.quarter);
        gradient2.addColorStop(1, colors.purple.zero);

        const labels2 = parties && parties.map((party) => party.party_name);
        const weight2 = parties && parties.map((party) => party.asistentes);

        const data2 = {
            labels: labels2,
            datasets: [
                {
                    label: "Número de Asistentes",
                    data: weight2,
                    fill: true,
                    backgroundColor: [
                        colors.purple.default,
                        colors.purple.half,
                        colors.purple.quarter,
                        colors.indigo.default,
                        colors.indigo.quarter
                    ],
                }
            ]
        };
        const config2 = {
            type: 'line',
            data: data2
        };
        const myChart = new Chart(ctx2, config2);

        return function cleanup() {

            myChart.destroy();
        };


    }, [parties]);
    const router = useRouter()


    return (
        <div className={"container"}>
            <div className={"flex justify-center"}>
                <div style={{width: '65vw', height: '30vw'}}>
                    <h2 className="text-center pb-4">Estadísticas</h2>
                    <p className="text-center pb-4">Número de asistentes por fiesta</p>
                    <canvas id="myChart" ref={canvasEl2} height="100"/>
                </div>
            </div>
        </div>

    );
}

export default Statistic;