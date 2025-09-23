export const presentationData = {
  intro: {
    title: "¿Por qué los Datos son el Nuevo Petróleo?",
    stats: [
      {
        value: "2x",
        label: "Los datos duplican su volumen constantemente",
        icon: "TrendingUp"
      },
      {
        value: "53%",
        label: "de proyectos de IA fallan por problemas de datos",
        icon: "AlertTriangle"
      },
      {
        value: "90%",
        label: "Las empresas buscan independencia tecnológica",
        icon: "Shield"
      }
    ]
  },
  
  problems: {
    title: "El Problema Actual: Sistemas Fragmentados",
    issues: [
      {
        title: "Múltiples bases de datos",
        description: "Diferentes sistemas para cada tarea específica",
        impact: "Complejidad operacional",
        cost: "Alto"
      },
      {
        title: "Costos elevados de licencias",
        description: "Oracle, SQL Server y otros proveedores tradicionales",
        impact: "Presupuesto limitado",
        cost: "Muy Alto"
      },
      {
        title: "Equipos en silos separados",
        description: "Falta de colaboración entre departamentos",
        impact: "Innovación frenada",
        cost: "Medio"
      },
      {
        title: "Complejidad operacional",
        description: "Gestión de múltiples tecnologías y proveedores",
        impact: "Productividad reducida",
        cost: "Alto"
      }
    ]
  },

  postgresql: {
    title: "PostgreSQL: El Motor de Base de Datos Más Amado",
    facts: [
      {
        metric: "#1",
        description: "Base de datos open source más popular del mundo",
        year: "2024"
      },
      {
        metric: "1,500+",
        description: "Empresas globalmente lo utilizan",
        growth: "+25% anual"
      },
      {
        metric: "Múltiples",
        description: "Ganador de premios 'Base de Datos del Año'",
        years: "2020, 2021, 2022, 2023"
      }
    ],
    benefits: [
      "Código abierto y gratuito",
      "Comunidad activa global",
      "Estándares SQL completos",
      "Extensibilidad sin límites",
      "Rendimiento empresarial"
    ]
  },

  edb: {
    title: "EDB PostgreSQL AI - La Evolución de PostgreSQL",
    improvements: [
      {
        metric: "99.999%",
        description: "Disponibilidad garantizada",
        detail: "Menos de 5 minutos de caída al año"
      },
      {
        metric: "5X",
        description: "Superior rendimiento",
        detail: "Comparado con PostgreSQL estándar"
      },
      {
        metric: "30X",
        description: "Más rápido en analíticas",
        detail: "Consultas complejas optimizadas"
      },
      {
        metric: "Una sola",
        description: "Plataforma unificada",
        detail: "Para todos los tipos de datos"
      }
    ]
  },

  pillars: {
    title: "Los Tres Pilares de EDB PostgreSQL AI",
    pillar1: {
      title: "Base de Datos Unificada",
      features: [
        {
          type: "Datos transaccionales",
          description: "Las operaciones diarias de su negocio",
          icon: "Database"
        },
        {
          type: "Datos analíticos", 
          description: "Los reportes e insights para tomar decisiones",
          icon: "BarChart3"
        },
        {
          type: "Datos de IA",
          description: "La información que alimenta la inteligencia artificial",
          icon: "Brain"
        }
      ]
    },
    pillar2: {
      title: "Gestión Híbrida",
      capabilities: [
        {
          feature: "Deploy en cualquier lugar",
          description: "Su oficina, la nube, o ambos",
          icon: "Cloud"
        },
        {
          feature: "Observabilidad profunda",
          description: "Ver qué pasa con sus datos en tiempo real",
          icon: "Eye"
        },
        {
          feature: "Automatización nativa",
          description: "Menos trabajo manual, menos errores",
          icon: "Zap"
        },
        {
          feature: "Soberanía de datos",
          description: "Usted controla dónde están sus datos",
          icon: "Lock"
        }
      ]
    },
    pillar3: {
      title: "Fábrica de IA",
      benefits: [
        {
          metric: "3X",
          description: "Más rápido desarrollo de aplicaciones de IA",
          icon: "Rocket"
        },
        {
          metric: "67%",
          description: "Menos complejidad que otras soluciones",
          icon: "Minimize2"
        },
        {
          metric: "5 líneas",
          description: "De código en lugar de 135+",
          icon: "Code"
        },
        {
          metric: "IA soberana",
          description: "Sus datos nunca salen de su control",
          icon: "Shield"
        }
      ]
    }
  },

  security: {
    title: "Seguridad Empresarial: Protección por Diseño",
    features: [
      {
        name: "Cifrado Transparente de Datos (TDE)",
        description: "Sus datos están encriptados automáticamente",
        level: "Automático",
        icon: "Lock"
      },
      {
        name: "Control de Acceso Granular",
        description: "Hasta nivel de fila individual",
        level: "Granular",
        icon: "UserCheck"
      },
      {
        name: "Auditoría Completa",
        description: "Registro de todo lo que pasa",
        level: "Total",
        icon: "FileText"
      },
      {
        name: "Protección contra Vulnerabilidades",
        description: "100% del código revisado y endurecido",
        level: "Completo",
        icon: "Shield"
      }
    ],
    stats: {
      repositories: "50+",
      coverage: "100%",
      compliance: ["GDPR", "PCI DSS", "SOC2", "HIPAA"]
    }
  },

  useCases: {
    title: "Casos de Uso Reales",
    cases: [
      {
        title: "Modernización de Aplicaciones Legadas",
        description: "Migración desde Oracle con 95% menos reescritura de aplicaciones",
        benefits: ["95% menos reescritura", "80% reducción de costos", "Compatible con sistemas existentes"],
        icon: "RefreshCw",
        color: "blue"
      },
      {
        title: "IA Empresarial Soberana",
        description: "Desarrollo de aplicaciones de GenAI sin exponer datos sensibles",
        benefits: ["Modelos junto a datos", "Cumplimiento automático", "Control total"],
        icon: "Brain",
        color: "purple"
      },
      {
        title: "Análisis en Tiempo Real",
        description: "Insights 30X más rápidos desde datos operacionales",
        benefits: ["30X más velocidad", "Sin pipelines ETL", "Lakehouse integrado"],
        icon: "Zap",
        color: "green"
      }
    ],
    testimonials: [
      {
        company: "ACI Worldwide",
        quote: "EDB Postgres AI Distributed HA nos dio lo que necesitábamos en una sola solución de menor costo, sin complementos adicionales.",
        role: "Director de Tecnología"
      },
      {
        company: "USDA Forest Service",
        quote: "EDB Postgres AI nos proporcionó las capacidades de rendimiento y gestión de datos que necesitábamos, todo a un costo increíblemente menor.",
        role: "Gerente de Sistemas"
      },
      {
        company: "Murex",
        quote: "Queríamos dar el mejor soporte posible a las aplicaciones ejecutándose en Postgres, por eso decidimos trabajar con EDB.",
        role: "Arquitecto de Soluciones"
      }
    ]
  },

  highAvailability: {
    title: "Alta Disponibilidad: Siempre Funcionando",
    features: [
      {
        name: "Arquitectura Geo-distribuida",
        description: "Sus datos en múltiples ubicaciones",
        detail: "Replicación automática entre regiones",
        icon: "Globe"
      },
      {
        name: "Failover Automático",
        description: "Si algo falla, el sistema se recupera solo",
        detail: "Recuperación en menos de 30 segundos",
        icon: "RotateCcw"
      },
      {
        name: "Clusters que se Auto-curan",
        description: "Tecnología que se repara a sí misma",
        detail: "Detección y corrección proactiva",
        icon: "Heart"
      },
      {
        name: "99.999% Disponibilidad",
        description: "Equivale a solo 5.26 minutos de caída al año",
        detail: "SLA empresarial garantizado",
        icon: "Shield"
      }
    ],
    kubernetes: {
      title: "Kubernetes y Contenedores: Tecnología del Futuro",
      benefits: [
        "EDB CloudNativePG: Operador líder",
        "Automatización completa",
        "Arquitectura cloud-native",
        "80% reducción en TCO"
      ]
    }
  },

  migration: {
    title: "Migración y Herramientas",
    tools: [
      {
        name: "Portal de Migración EDB",
        description: "Análisis automático de compatibilidad",
        features: ["Evaluación automática", "Reporte detallado", "Estimación de esfuerzo"],
        icon: "Search"
      },
      {
        name: "AI Copilot para Migración",
        description: "Asistente de IA para migraciones",
        features: ["Conversión de código", "Optimización automática", "Mejores prácticas"],
        icon: "Bot"
      },
      {
        name: "Replicación en Tiempo Real",
        description: "Migración sin parar operaciones",
        features: ["Cero tiempo de inactividad", "Sincronización continua", "Rollback seguro"],
        icon: "Repeat"
      },
      {
        name: "LiveCompare",
        description: "Validación automática de datos migrados",
        features: ["Verificación completa", "Reportes de diferencias", "Certificación de calidad"],
        icon: "CheckCircle"
      }
    ]
  },

  benefits: {
    title: "Beneficios de Negocio Cuantificados",
    metrics: [
      {
        value: "6X",
        description: "menor TCO que bases de datos tradicionales",
        category: "Costos",
        icon: "DollarSign"
      },
      {
        value: "30%",
        description: "aumento en productividad de equipos",
        category: "Productividad",
        icon: "TrendingUp"
      },
      {
        value: "3X",
        description: "más rápido desarrollo de aplicaciones de IA",
        category: "Velocidad",
        icon: "Rocket"
      },
      {
        value: "5X",
        description: "mejor rendimiento en throughput",
        category: "Performance",
        icon: "Zap"
      },
      {
        value: "8X",
        description: "mejor rendimiento con optimización inteligente",
        category: "Optimización",
        icon: "Cpu"
      }
    ]
  },

  comparison: {
    title: "Comparación con la Competencia",
    competitors: [
      {
        name: "Oracle",
        comparison: "95% menos reescritura, 80% reducción de costos",
        advantages: ["Menor costo", "Más flexible", "Sin vendor lock-in"],
        score: 95
      },
      {
        name: "Soluciones Cloud",
        comparison: "Control total, sin vendor lock-in",
        advantages: ["Soberanía de datos", "Multi-cloud", "Portabilidad"],
        score: 90
      },
      {
        name: "Bases de Datos Vectoriales",
        comparison: "4.22X más rápido en consultas",
        advantages: ["Rendimiento superior", "Funcionalidad completa", "Menos complejidad"],
        score: 88
      },
      {
        name: "Sistemas Fragmentados",
        comparison: "Una sola plataforma unificada",
        advantages: ["Simplicidad", "Menor mantenimiento", "Costos reducidos"],
        score: 92
      }
    ]
  },

  nextSteps: {
    title: "Próximos Pasos",
    steps: [
      {
        step: "1",
        title: "Evaluación Gratuita",
        description: "Tech preview de EDB Postgres AI",
        action: "Comenzar ahora",
        duration: "15 minutos",
        icon: "Play"
      },
      {
        step: "2",
        title: "Assessment de Migración",
        description: "Análisis de su infraestructura actual",
        action: "Programar sesión",
        duration: "2 horas",
        icon: "Search"
      },
      {
        step: "3",
        title: "Proof of Concept",
        description: "Prueba piloto en su entorno",
        action: "Planificar PoC",
        duration: "2-4 semanas",
        icon: "TestTube"
      },
      {
        step: "4",
        title: "Propuesta Personalizada",
        description: "Contacto con ventas para su organización",
        action: "Contactar equipo",
        duration: "1 semana",
        icon: "Users"
      }
    ],
    contact: {
      sales: "ventas@edb.com",
      support: "soporte@edb.com",
      technical: "tecnico@edb.com"
    }
  }
};