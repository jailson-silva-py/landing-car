import styles from './SectionCompany.module.css'

const SectionCompany = () => {

    return (

        <section className={styles.company} id="company">
        <div className={styles.container}>
    
        <h2>Além da Venda: Curadoria e Confiança</h2>
        <p className={styles.subtitle}>
        Conectamos entusiastas a supercarros icônicos através de 
        processo transparente e verificação rigorosa. Não somos 
        concessionária oficial — somos especialistas independentes 
        obcecados por excelência automotiva.
        </p>

        <div className={styles.processGrid}>
        <div className={styles.processStep}>
            
            <span className={styles.stepNumber}>01</span>
            <div className={styles.processStepText}> 
            <h3>Consulta Inicial</h3>
            <p>Entendemos suas expectativas, perfil de uso e 
            orçamento realista.</p>
            </div>
        </div>

        <div className={styles.processStep}>

            <span className={styles.stepNumber}>02</span>
            <div className={styles.processStepText}> 
            <h3>Busca Especializada</h3>
            <p>Localizamos veículos com procedência verificada e 
            histórico documentado.</p>
            </div>
            
        </div>

        <div className={styles.processStep}>

            <span className={styles.stepNumber}>03</span>

            <div className={styles.processStepText}> 
            <h3>Inspeção Técnica</h3>
            <p>Vistoria completa ou relatório detalhado com fotos, 
            vídeos e diagnóstico.</p>
            </div>

        </div>

        <div className={styles.processStep}>
            
            <span className={styles.stepNumber}>04</span>
            <div className={styles.processStepText}> 
            <h3>Entrega Segura</h3>
            <p>Documentação, logística e suporte até o carro estar 
            no seu nome.</p>
            </div>

        </div>
        </div>

        <div className={styles.guarantees}>
        <h3>O Que Garantimos</h3>
        <ul>
            <li>Verificação de procedência e documentação legal</li>
            <li>Histórico de manutenção quando disponível</li>
            <li>Inspeção mecânica pré-entrega</li>
            <li>Rede de oficinas especializadas parceiras</li>
            <li>Suporte pós-venda para registro e adaptação</li>
        </ul>
        <p className={styles.disclaimer}>
            *Trabalhamos exclusivamente com veículos de procedência 
            comprovada e documentação regular.
        </p>
        </div>

        <div className={styles.cta}>
        <h3>Pronto para encontrar seu próximo supercarro?</h3>
        <button>Agendar Consulta</button>
        </div>

        </div>
        </section>

    )

}

export default SectionCompany