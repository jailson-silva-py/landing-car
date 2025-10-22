import styles from './SectionCompany.module.css'

const SectionCompany = () => {

    return (

        <section className={styles.company} id="company">
            <div className={styles.whoWeAre}>
                <h1>Quem somos</h1>
                <p>Somos um estúdio independente de engenharia
                visual e curadoria automotiva. Entregamos
                experiências digitais de alta performance
                (UI/3D) e seleção técnica de veículos,
                com foco em transparência, acessibilidade e
                métricas objetivas.
                </p>
            </div>
            <div className={styles.trust}>
                <h1>Por que confiar</h1>
                <ul>

                <li>
                Processo documentado e auditável (descoberta →
                protótipo → validação → entrega).
                </li>
                <li>
                Qualidade mensurável (Lighthouse mobile 90+,
                A11y AA, CLS 0.00 — demo).
                </li>
                <li>
                Rede de especialistas e oficinas parceiras para
                inspeção e manutenção.
                </li>

                </ul>
            </div>

            <div className={styles.whatWeDo}>

                <h1>O que fazemos</h1>
                <ul>
                    
                    <li>
                        <p>
                        Curadoria 1:1 de cupês V8 de motor
                        central {'(1999–2005)'}.
                        </p>
                    </li>

                    <li>
                        <p>
                        Relatórios técnicos com histórico, fotos,
                        vídeo e medições.
                        </p>
                    </li>

                    <li>
                        <p>
                        Entrega assistida: documentação,
                        logística e suporte pós-compra.
                        </p>
                    </li>

                </ul>

            </div>

            <div className={styles.guarantees}>

                <h1>Garantias</h1>
                <ul>
                    
                    <li>
                        <p>
                        Procedência e documentação verificadas.
                        </p>
                    </li>

                    <li>
                        <p>
                        Inspeção mecânica pré-entrega.
                        </p>
                    </li>

                    <li>
                        <p>
                        Suporte pós-venda para registro e adaptação.
                        </p>
                    </li>

                </ul>

            </div>
        </section>

    )

}

export default SectionCompany