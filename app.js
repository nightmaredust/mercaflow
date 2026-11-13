// 1.  TODOS LOS 32 DEPARTAMENTOS DE COLOMBIA + BOGOTÁ D.C. Y SUS CIUDADES
    const COLOMBIA_GEO = {
      "Amazonas": ["Leticia", "Puerto Nariño"],
      "Antioquia": ["Medellín", "Envigado", "Itagüí", "Bello", "Rionegro", "Apartadó", "Turbo", "Sabaneta", "La Ceja"],
      "Arauca": ["Arauca", "Saravena", "Tame", "Arauquita"],
      "Atlántico": ["Barranquilla", "Soledad", "Malambo", "Sabanalarga", "Puerto Colombia"],
      "Bogotá D.C.": ["Bogotá D.C."],
      "Bolívar": ["Cartagena de Indias", "Magangué", "Turbaco", "El Carmen de Bolívar", "Arjona"],
      "Boyacá": ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá", "Paipa", "Puerto Boyacá"],
      "Caldas": ["Manizales", "La Dorada", "Chinchiná", "Villamaría", "Riosucio"],
      "Caquetá": ["Florencia", "San Vicente del Caguán", "Cartagena del Chairá"],
      "Casanare": ["Yopal", "Aguazul", "Villanueva", "Paz de Ariporo"],
      "Cauca": ["Popayán", "Santander de Quilichao", "Puerto Tejada", "Patía", "Piendamó", "Miranda"],
      "Cesar": ["Valledupar", "Aguachica", "Agustín Codazzi", "Bosconia"],
      "Chocó": ["Quibdó", "Istmina", "Tadó", "Condoto"],
      "Córdoba": ["Montería", "Lorica", "Sahagún", "Cereté", "Montelíbano"],
      "Cundinamarca": ["Soacha", "Fusagasugá", "Facatativá", "Zipaquirá", "Chía", "Girardot", "Mosquera", "Madrid", "Funza"],
      "Guainía": ["Inírida"],
      "Guaviare": ["San José del Guaviare", "El Retorno"],
      "Huila": ["Neiva", "Pitalito", "Garzón", "La Plata"],
      "La Guajira": ["Riohacha", "Maicao", "Uribia", "San Juan del Cesar"],
      "Magdalena": ["Santa Marta", "Ciénaga", "Zona Bananera", "Fundación", "El Banco"],
      "Meta": ["Villavicencio", "Acacías", "Granada", "Puerto López"],
      "Nariño": ["Pasto", "Tumaco", "Ipiales", "Túquerres"],
      "Norte de Santander": ["Cúcuta", "Ocaña", "Villa del Rosario", "Los Patios", "Pamplona"],
      "Putumayo": ["Mocoa", "Puerto Asís", "Orito", "Valle del Guamuez"],
      "Quindío": ["Armenia", "Calarcá", "La Tebaida", "Montenegro", "Quimbaya"],
      "Risaralda": ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia"],
      "San Andrés y Providencia": ["San Andrés", "Providencia"],
      "Santander": ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barrancabermeja", "San Gil"],
      "Sucre": ["Sincelejo", "Corozal", "San Marcos", "Tolú"],
      "Tolima": ["Ibagué", "Espinal", "Melgar", "Mariquita", "Líbano"],
      "Valle del Cauca": ["Cali", "Palmira", "Buenaventura", "Tuluá", "Buga", "Cartago", "Jamundí", "Yumbo"],
      "Vaupés": ["Mitú"],
      "Vichada": ["Puerto Carreño"]
    };

    // 2. DIRECTORIO DE PROVEEDORES MAYORISTAS Y MINORISTAS SUSCRITOS EN COLOMBIA
    const SUPPLIERS_DB = [
      {
        id: "sup-1",
        lat: 3.4516,
        lng: -76.532,
        name: "Distribuidora Mayorista del Valle S.A.S",
        role: "Mayorista",
        department: "Valle del Cauca",
        city: "Cali",
        categories: ["Alimentos y Bebidas", "Aseo y Hogar"],
        starProduct: "Arroz Premium 50kg & Aceite Vegetal",
        promoDiscount: 15,
        verified: true,
        mapPos: { top: "58%", left: "34%" }
      },
      {
        id: "sup-2",
        lat: 2.4448,
        lng: -76.6147,
        name: "Café Especial del Cauca & Export",
        role: "Mayorista",
        department: "Cauca",
        city: "Popayán",
        categories: ["Agroindustria y Café", "Alimentos y Bebidas"],
        starProduct: "Café Pergamino y Tostado Origen Cauca",
        promoDiscount: 20,
        verified: true,
        mapPos: { top: "66%", left: "32%" }
      },
      {
        id: "sup-3",
        lat: 6.2442,
        lng: -75.5812,
        name: "Textiles & Confecciones Antioquia",
        role: "Mayorista",
        department: "Antioquia",
        city: "Medellín",
        categories: ["Textil y Confección"],
        starProduct: "Lote Camisetas Algodón 100% y Denim",
        promoDiscount: 12,
        verified: true,
        mapPos: { top: "36%", left: "41%" }
      },
      {
        id: "sup-4",
        lat: 4.711,
        lng: -74.0721,
        name: "TechBogotá Importaciones B2B",
        role: "Mayorista",
        department: "Bogotá D.C.",
        city: "Bogotá D.C.",
        categories: ["Tecnología y Electrónica"],
        starProduct: "Lectores Código de Barras y Terminales POS",
        promoDiscount: 18,
        verified: true,
        mapPos: { top: "48%", left: "51%" }
      },
      {
        id: "sup-5",
        lat: 10.9685,
        lng: -74.7813,
        name: "Comercializadora Caribe Express",
        role: "Minorista",
        department: "Atlántico",
        city: "Barranquilla",
        categories: ["Alimentos y Bebidas", "Aseo y Hogar"],
        starProduct: "Insumos de Aseo Institucional",
        promoDiscount: 0,
        verified: true,
        mapPos: { top: "14%", left: "46%" }
      },
      {
        id: "sup-6",
        lat: 7.1193,
        lng: -73.1227,
        name: "Ferretería Industrial Santander",
        role: "Mayorista",
        department: "Santander",
        city: "Bucaramanga",
        categories: ["Ferretería y Construcción"],
        starProduct: "Herramienta Eléctrica y Cemento Gris",
        promoDiscount: 10,
        verified: true,
        mapPos: { top: "32%", left: "56%" }
      },
      {
        id: "sup-7",
        lat: 3.5394,
        lng: -76.3036,
        name: "Surtidora Minorista Palmira Centro",
        role: "Minorista",
        department: "Valle del Cauca",
        city: "Palmira",
        categories: ["Alimentos y Bebidas", "Agroindustria y Café"],
        starProduct: "Azúcar Refinada y Panela Pulverizada",
        promoDiscount: 8,
        verified: true,
        mapPos: { top: "56%", left: "37%" }
      },
      {
        id: "sup-8",
        lat: 4.8087,
        lng: -75.6906,
        name: "Logística & Abastos Eje Cafetero",
        role: "Minorista",
        department: "Risaralda",
        city: "Pereira",
        categories: ["Agroindustria y Café", "Textil y Confección"],
        starProduct: "Empaques Biodegradables y Café",
        promoDiscount: 14,
        verified: true,
        mapPos: { top: "46%", left: "40%" }
      }
    ];

    // 3. ESTADO GLOBAL DE LA APLICACIÓN
    let currentUser = null;
    let inventory = [];
    let inventoryView = 'all';
    let auditLogs = [];
    let notifications = [];
    let activeChatSupplier = null;
    let chatHistories = {};
    let nearbyCategoryFilter = null;
    let suppliersLeafletMap = null;
    let supplierMapMarkers = [];
    let currentGpsMarker = null;
    let selectedCheckoutPlan = null;
    let topProductsChartInstance = null;
    let citiesChartInstance = null;
    let analyticsSelectedCities = [];
    let aiModeEnabled = true;
    let currentAiTopic = 'why_this';
    let currentTipIndex = 0;

    const AI_STRATEGIC_ANSWERS = {
      why_this: `<strong>¿Por qué elegir Mercaflow sobre otros softwares?</strong><br>A diferencia de los ERP tradicionales complejos y costosos que solo miran hacia adentro de una bodega, Mercaflow combina <strong>gestión de inventario con una red comercial B2B/B2C viva en los 32 departamentos de Colombia</strong>. Incluye trazabilidad forense exacta (dispositivo, ciudad y hora de cada modificación o archivo eliminado), alertas automáticas de promociones a compradores y conexión inmediata con el proveedor más cercano cuando un producto se agota.`,
      why_created: `<strong>¿Por qué se creó Mercaflow Colombia?</strong><br>Nació para resolver la desconexión crítica entre mayoristas, minoristas, supermercados y restaurantes de Colombia. Miles de negocios pierden ventas diarias por quiebres de stock, falta de visibilidad de proveedores cercanos dentro o fuera de su ciudad y descontrol sobre quién modifica o borra registros de inventario. Mercaflow unifica control interno y abastecimiento externo en una sola plataforma.`,
      how_implement: `<strong>¿Cómo se implementaría en sus empresas?</strong><br>La adopción toma menos de 15 minutos en 4 pasos: <strong>1) Registro empresarial</strong> seleccionando el tipo de negocio (supermercado, restaurante, tienda o distribuidor) y el rol comercial, departamento y municipio; <strong>2) Carga de catálogo</strong> con precios en COP, stock mínimo, unidades de medida y fechas de vencimiento para alimentos e insumos; <strong>3) Activación de alertas y mapa</strong> para recibir pedidos directos por chat sin intermediarios; y <strong>4) Seguimiento gerencial</strong> mediante la bitácora de auditoría y los reportes de lo más vendido.`
    };

    const AI_SUPPORT_MESSAGES = [
      "¡Vas por buen camino! Cada pequeño avance en la organización de tu negocio construye resultados grandes. ¡Sigue así!",
      "¡Que tengas un excelente día! Tu esfuerzo mantiene tu negocio en movimiento. Mercaflow te acompaña en cada paso.",
      "¡Buen trabajo! Mantener tu inventario organizado te ayuda a tomar decisiones con más tranquilidad y confianza.",
      "Consejo comercial: Mantener actualizados tus stocks mínimos permite que Mercaflow te conecte automáticamente con mayoristas cercanos antes de perder ventas.",
      "Impulso de crecimiento: Publicar un descuento promocional del 10% al 15% en productos de alta rotación activa notificaciones inmediatas en toda la red de compradores.",
      "Control operativo: Cada movimiento en tu bodega queda respaldado con dispositivo, ubicación y hora exacta para máxima transparencia ante socios e inversionistas.",
      "Estrategia B2B/B2C: Utiliza el chat directo desde el mapa de Colombia para negociar fletes compartidos y precios por volumen sin intermediarios."
    ];

    // 4. INICIALIZACIÓN AL CARGAR LA PÁGINA
    window.addEventListener('DOMContentLoaded', () => {
      initDepartmentSelectors();
      initAnalyticsCityEditor();
      loadUserPreferences();
      // Garantizar explícitamente que todos los campos de Login y Registro inicien vacíos
      clearAuthForms();

      const savedSession = localStorage.getItem('mercaflow_session');
      if (savedSession) {
        currentUser = JSON.parse(savedSession);
        loadUserWorkspace(false);
      }
      // La IA cambia el mensaje de ánimo periódicamente mientras la plataforma está abierta.
      window.setInterval(() => {
        if (currentUser && aiModeEnabled && !document.getElementById('app-shell').classList.contains('hidden')) {
          refreshAiMotivation();
        }
      }, 90000);
    });

    function clearAuthForms() {
      const ids = ['login-email', 'login-password', 'reg-business', 'reg-email', 'reg-password'];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      const roleEl = document.getElementById('reg-role');
      const typeEl = document.getElementById('reg-business-type');
      const deptEl = document.getElementById('reg-department');
      const cityEl = document.getElementById('reg-city');
      if (roleEl) roleEl.selectedIndex = 0;
      if (typeEl) typeEl.selectedIndex = 0;
      if (deptEl) deptEl.selectedIndex = 0;
      if (cityEl) {
        cityEl.innerHTML = '<option value="" selected disabled></option>';
      }
    }

    function initDepartmentSelectors() {
      const departments = Object.keys(COLOMBIA_GEO).sort((a, b) => a.localeCompare(b, 'es'));
      
      // Selector en Registro (sin texto de ejemplo en la opción vacía)
      const regDept = document.getElementById('reg-department');
      regDept.innerHTML = '<option value="" selected disabled></option>';
      departments.forEach(dep => {
        const opt = document.createElement('option');
        opt.value = dep;
        opt.textContent = dep;
        regDept.appendChild(opt);
      });

      // Selector en Directorio
      const dirDept = document.getElementById('dir-department');
      dirDept.innerHTML = '<option value="ALL">Todos los Departamentos (32 + Bogotá)</option>';
      departments.forEach(dep => {
        const opt = document.createElement('option');
        opt.value = dep;
        opt.textContent = dep;
        dirDept.appendChild(opt);
      });
    }

    function populateCities(deptSelectId, citySelectId, includeAllOption = false) {
      const dept = document.getElementById(deptSelectId).value;
      const citySelect = document.getElementById(citySelectId);
      
      if (includeAllOption) {
        citySelect.innerHTML = '<option value="ALL">Todas las Ciudades</option>';
      } else {
        citySelect.innerHTML = '<option value="" selected disabled></option>';
      }

      if (dept && COLOMBIA_GEO[dept]) {
        COLOMBIA_GEO[dept].forEach(city => {
          const opt = document.createElement('option');
          opt.value = city;
          opt.textContent = city;
          citySelect.appendChild(opt);
        });
      }
    }

    // 5. FUNCIONES DE AUTENTICACIÓN (OJO DE CONTRASEÑA, ENTER, REGISTRO Y LOGIN)
    function switchAuthTab(tab) {
      const loginForm = document.getElementById('login-form');
      const regForm = document.getElementById('register-form');
      const tabLogin = document.getElementById('tab-login');
      const tabReg = document.getElementById('tab-register');
      hideAuthAlert();

      if (tab === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        tabLogin.className = "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm";
        tabReg.className = "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
      } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        tabReg.className = "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm";
        tabLogin.className = "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
      }
    }

    // Toggle persistente para ver / ocultar contraseña con un clic
    function togglePasswordVisibility(inputId, iconId) {
      const input = document.getElementById(inputId);
      const icon = document.getElementById(iconId);
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    }

    function showAuthAlert(message, isError = true) {
      const box = document.getElementById('auth-alert');
      box.textContent = message;
      box.className = isError
        ? "mb-5 p-3.5 rounded-xl text-sm font-medium border bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-950/50 dark:border-rose-800 dark:text-rose-300"
        : "mb-5 p-3.5 rounded-xl text-sm font-medium border bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/50 dark:border-emerald-800 dark:text-emerald-300";
      box.classList.remove('hidden');
    }

    function hideAuthAlert() {
      document.getElementById('auth-alert').classList.add('hidden');
    }

    function handleRegisterSubmit(e) {
      e.preventDefault();
      const business = document.getElementById('reg-business').value.trim();
      const role = document.getElementById('reg-role').value;
      const businessType = document.getElementById('reg-business-type').value;
      const email = document.getElementById('reg-email').value.trim().toLowerCase();
      const password = document.getElementById('reg-password').value;
      const department = document.getElementById('reg-department').value;
      const city = document.getElementById('reg-city').value;

      if (!business || !role || !businessType || !email || !password || !department || !city) {
        showAuthAlert("Por favor completa todos los campos obligatorios para crear tu cuenta.");
        return;
      }

      const users = JSON.parse(localStorage.getItem('mercaflow_users') || '[]');
      if (users.some(u => u.email === email)) {
        showAuthAlert("Este correo ya se encuentra registrado. Por favor inicia sesión.");
        return;
      }

      const newUser = {
        id: 'usr-' + Date.now(),
        business,
        role,
        businessType,
        email,
        password,
        department,
        city,
        plan: 'Pro 1 Año (Acceso Completo)',
        planExpiry: null
      };

      users.push(newUser);
      localStorage.setItem('mercaflow_users', JSON.stringify(users));
      currentUser = newUser;
      localStorage.setItem('mercaflow_session', JSON.stringify(currentUser));

      triggerLoadingAndEnter(`Activando cuenta PRO completa para ${business}...`);
    }

    function handleLoginSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value;

      if (!email || !password) {
        showAuthAlert("Ingresa tu correo electrónico y contraseña única.");
        return;
      }

      const users = JSON.parse(localStorage.getItem('mercaflow_users') || '[]');
      const found = users.find(u => u.email === email && u.password === password);

      if (!found) {
        showAuthAlert("Credenciales incorrectas o cuenta no registrada. Verifica tus datos o crea una cuenta.");
        return;
      }

      currentUser = found;
      localStorage.setItem('mercaflow_session', JSON.stringify(currentUser));
      triggerLoadingAndEnter(`Bienvenido de nuevo, ${currentUser.business}...`);
    }

    function quickInvestorDemo() {
      currentUser = {
        id: 'demo-investor',
        business: 'Inversiones Comerciales Cali S.A.S',
        role: 'Mayorista',
        businessType: 'Supermercado (Demo)',
        email: 'inversionistas@mercaflow.co',
        department: 'Valle del Cauca',
        city: 'Cali',
        plan: 'Pro 1 Año (Acceso Completo)',
        planExpiry: null
      };
      localStorage.setItem('mercaflow_session', JSON.stringify(currentUser));
      triggerLoadingAndEnter("Iniciando entorno PRO interactivo para Inversionistas...");
    }

    function returnToAuthHome() {
      clearAuthForms();
      switchAuthTab('login');
      hideAuthAlert();
    }

    function goToDashboardHome() {
      clearNearbyFilter();
      switchSection('inventory');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function triggerLoadingAndEnter(titleText) {
      const overlay = document.getElementById('loading-overlay');
      const bar = document.getElementById('loading-bar');
      document.getElementById('loading-title').textContent = titleText;
      overlay.classList.remove('hidden');

      setTimeout(() => { bar.style.width = '45%'; }, 150);
      setTimeout(() => { bar.style.width = '85%'; }, 550);
      setTimeout(() => {
        bar.style.width = '100%';
        setTimeout(() => {
          overlay.classList.add('hidden');
          bar.style.width = '0%';
          loadUserWorkspace(true);
        }, 250);
      }, 950);
    }

    function logoutUser() {
      localStorage.removeItem('mercaflow_session');
      currentUser = null;
      document.getElementById('app-shell').classList.add('hidden');
      document.getElementById('auth-screen').classList.remove('hidden');
      clearAuthForms();
      switchAuthTab('login');
    }

    // 6. DETECCIÓN DE DISPOSITIVO, LUGAR Y HORA PARA AUDITORÍA FORENSE
    function detectDeviceInfo() {
      const ua = navigator.userAgent;
      let os = "Dispositivo Desconocido";
      if (/Windows NT 10.0/.test(ua)) os = "Windows 10/11 PC";
      else if (/Windows/.test(ua)) os = "Windows PC";
      else if (/Android/.test(ua)) os = "Android Mobile";
      else if (/iPhone|iPad/.test(ua)) os = "iOS iPhone/iPad";
      else if (/Mac OS X/.test(ua)) os = "macOS Desktop";
      else if (/Linux/.test(ua)) os = "Linux Workstation";

      let browser = "Navegador Web";
      if (/Edg\//.test(ua)) browser = "Microsoft Edge";
      else if (/Chrome\//.test(ua)) browser = "Google Chrome";
      else if (/Firefox\//.test(ua)) browser = "Mozilla Firefox";
      else if (/Safari\//.test(ua)) browser = "Apple Safari";

      return `${os} • ${browser}`;
    }

    function getFormattedTimestamp() {
      const now = new Date();
      return now.toLocaleString('es-CO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    }

    function recordAuditEvent(actionType, itemName, details) {
      const device = detectDeviceInfo();
      const location = `${currentUser.city}, ${currentUser.department}`;
      const timestamp = getFormattedTimestamp();

      const event = {
        id: 'aud-' + Date.now() + Math.random().toString(16).slice(2, 6),
        actionType, // 'CREADO' | 'MODIFICADO' | 'ELIMINADO'
        itemName,
        details,
        device,
        location,
        timestamp
      };

      auditLogs.unshift(event);
      saveUserData();
      renderAuditLogs();
      updateKPIs();
      return event;
    }

    // 7. CARGA Y PERSISTENCIA DE DATOS DEL USUARIO
    function loadUserWorkspace(isFreshLogin) {
      document.getElementById('auth-screen').classList.add('hidden');
      document.getElementById('app-shell').classList.remove('hidden');

      // Actualizar cabecera
      document.getElementById('header-role-badge').textContent = `${currentUser.businessType || 'Comercio'} • ${currentUser.role}`;
      document.getElementById('header-location-text').innerHTML = `<i class="fa-solid fa-location-dot text-emerald-500"></i> ${currentUser.city}, ${currentUser.department} • ${currentUser.business}`;
      document.getElementById('current-device-label').textContent = detectDeviceInfo();

      const storageKey = `mercaflow_data_${currentUser.email}`;
      const savedData = localStorage.getItem(storageKey);

      if (savedData) {
        const parsed = JSON.parse(savedData);
        inventory = parsed.inventory || [];
        auditLogs = parsed.auditLogs || [];
        notifications = parsed.notifications || [];
        chatHistories = parsed.chatHistories || {};
      } else {
        // Datos iniciales realistas para demostrar stock bajo, promociones y auditoría
        const nowStr = getFormattedTimestamp();
        const devStr = detectDeviceInfo();
        const locStr = `${currentUser.city}, ${currentUser.department}`;

        inventory = [
          {
            id: 'prd-101',
            name: 'Café Especial Tostado 500g',
            category: 'Abarrotes y bebidas',
            price: 28500,
            stock: 42,
            minStock: 15,
            discount: 15,
            expiryDate: new Date(Date.now() + 12 * 86400000).toISOString().slice(0, 10),
            lastAudit: { action: 'CREADO', device: devStr, location: locStr, timestamp: nowStr }
          },
          {
            id: 'prd-102',
            name: 'Aceite Vegetal x 3000 ml',
            category: 'Abarrotes y cocina',
            price: 34000,
            stock: 4, // Bajo stock para mostrar alerta y botón a proveedor cercano
            minStock: 10,
            discount: 0,
            expiryDate: new Date(Date.now() + 45 * 86400000).toISOString().slice(0, 10),
            lastAudit: { action: 'MODIFICADO', device: devStr, location: locStr, timestamp: nowStr }
          },
          {
            id: 'prd-103',
            name: 'Pollo fresco por kilogramo',
            category: 'Carnes y alimentos frescos',
            price: 39000,
            stock: 0, // Agotado para demostrar conexión inmediata con mayorista cercano
            minStock: 12,
            discount: 0,
            expiryDate: new Date(Date.now() - 4 * 86400000).toISOString().slice(0, 10),
            lastAudit: { action: 'MODIFICADO', device: devStr, location: locStr, timestamp: nowStr }
          }
        ];

        auditLogs = [
          {
            id: 'aud-init-1',
            actionType: 'CREADO',
            itemName: 'Inventario Base Inicial (3 referencias)',
            details: 'Sincronización inicial de bodega en la nube',
            device: devStr,
            location: locStr,
            timestamp: nowStr
          }
        ];

        notifications = [
          {
            id: 'not-1',
            supplierId: 'sup-1',
            supplierName: 'Distribuidora Mayorista del Valle S.A.S',
            city: 'Cali, Valle del Cauca',
            text: 'Publicó 15% de descuento en Arroz Premium 50kg & Aceite Vegetal.',
            time: 'Hace 5 min',
            unread: true
          },
          {
            id: 'not-2',
            supplierId: 'sup-2',
            supplierName: 'Café Especial del Cauca & Export',
            city: 'Popayán, Cauca',
            text: 'Nueva promoción relámpago: 20% OFF en Café Origen Cauca por compras mayoristas.',
            time: 'Hace 22 min',
            unread: true
          },
          {
            id: 'not-3',
            supplierId: 'sup-3',
            supplierName: 'Textiles & Confecciones Antioquia',
            city: 'Medellín, Antioquia',
            text: '12% de descuento activo en Lote Camisetas Algodón 100%.',
            time: 'Hace 1 hora',
            unread: true
          }
        ];

        saveUserData();
      }

      updatePlanUI();
      renderInventory();
      renderAuditLogs();
      renderSuppliers();
      renderNotifications();
      updateKPIs();
      updateAiAssistantUI();
    }

    function saveUserData() {
      if (!currentUser) return;
      const storageKey = `mercaflow_data_${currentUser.email}`;
      localStorage.setItem(storageKey, JSON.stringify({
        inventory,
        auditLogs,
        notifications,
        chatHistories
      }));
      localStorage.setItem('mercaflow_session', JSON.stringify(currentUser));
    }

    // 8. GESTIÓN DE PLANES (GRATIS VS PRO EN COP)
    function updatePlanUI() {
      const isPro = currentUser.plan !== 'Gratis';
      const btn = document.getElementById('plan-status-btn');
      const label = document.getElementById('plan-status-label');
      const freeLock = document.getElementById('analytics-free-lock');
      const proBadge = document.getElementById('analytics-pro-badge');

      if (isPro) {
        btn.className = "flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold border transition shadow-sm bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:border-emerald-700 dark:text-emerald-300";
        label.textContent = `${currentUser.plan} Activo`;
        freeLock.classList.add('hidden');
        proBadge.classList.remove('hidden');
      } else {
        btn.className = "flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold border transition shadow-sm bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100 dark:bg-amber-950/50 dark:border-amber-800 dark:text-amber-300";
        label.textContent = "Plan Gratis (3 prod.)";
        freeLock.classList.remove('hidden');
        proBadge.classList.add('hidden');
      }
      updateKPIs();
    }

    function openPricingModal() {
      document.getElementById('checkout-panel').classList.add('hidden');
      document.getElementById('pricing-modal').classList.remove('hidden');
    }

    function closePricingModal() {
      document.getElementById('pricing-modal').classList.add('hidden');
    }

    function selectProCheckout(planName, priceCop, discountPct) {
      selectedCheckoutPlan = { planName, priceCop, discountPct };
      document.getElementById('checkout-plan-name').textContent = `${planName} ${discountPct > 0 ? `(${discountPct}% de descuento aplicado)` : ''}`;
      document.getElementById('checkout-plan-price').textContent = `Total a pagar: $${priceCop.toLocaleString('es-CO')} COP`;
      document.getElementById('checkout-panel').classList.remove('hidden');
    }

    function confirmProPayment(method) {
      if (!selectedCheckoutPlan) return;
      currentUser.plan = selectedCheckoutPlan.planName;
      saveUserData();
      updatePlanUI();
      closePricingModal();
      showToast(`¡Suscripción ${selectedCheckoutPlan.planName} Activada!`, `Pago procesado vía ${method}. Ahora tienes inventario ilimitado y analítica completa.`);
      if (!document.getElementById('section-analytics').classList.contains('hidden')) {
        renderAnalyticsCharts();
      }
    }

    function activateFreePlan() {
      currentUser.plan = 'Gratis';
      saveUserData();
      updatePlanUI();
      closePricingModal();
      showToast("Plan Gratis seleccionado", "Límite activo de hasta 3 productos en inventario.");
    }

    // 9. CRUD DE INVENTARIO CON AUDITORÍA Y REPOSICIÓN CERCANA
    function openProductModal(productId = null) {
      const isPro = currentUser.plan !== 'Gratis';
      if (!productId && !isPro && inventory.length >= 3) {
        showToast("Límite del Plan Gratis alcanzado", "El plan gratuito permite hasta 3 productos. Actualiza a Plan Pro (desde $38.900 COP/mes en plan anual) para inventario ilimitado.");
        openPricingModal();
        return;
      }

      const modal = document.getElementById('product-modal');
      const title = document.getElementById('product-modal-title');
      
      if (productId) {
        const prod = inventory.find(p => p.id === productId);
        if (!prod) return;
        title.textContent = "Modificar Producto (Con Registro de Auditoría)";
        document.getElementById('prod-id').value = prod.id;
        document.getElementById('prod-name').value = prod.name;
        document.getElementById('prod-category').value = prod.category;
        document.getElementById('prod-price').value = prod.price;
        document.getElementById('prod-stock').value = prod.stock;
        document.getElementById('prod-min-stock').value = prod.minStock;
        document.getElementById('prod-discount').value = prod.discount || 0;
        document.getElementById('prod-expiry').value = prod.expiryDate || '';
      } else {
        title.textContent = "Registrar Nuevo Producto en Inventario";
        document.getElementById('product-form').reset();
        document.getElementById('prod-id').value = '';
        document.getElementById('prod-discount').value = 0;
        document.getElementById('prod-expiry').value = '';
      }

      modal.classList.remove('hidden');
    }

    function closeProductModal() {
      document.getElementById('product-modal').classList.add('hidden');
    }

    function saveProduct(e) {
      e.preventDefault();
      const id = document.getElementById('prod-id').value;
      const name = document.getElementById('prod-name').value.trim();
      const category = document.getElementById('prod-category').value;
      const price = Number(document.getElementById('prod-price').value);
      const stock = Number(document.getElementById('prod-stock').value);
      const minStock = Number(document.getElementById('prod-min-stock').value);
      const discount = Number(document.getElementById('prod-discount').value) || 0;
      const expiryDate = document.getElementById('prod-expiry').value || null;

      const device = detectDeviceInfo();
      const location = `${currentUser.city}, ${currentUser.department}`;
      const timestamp = getFormattedTimestamp();

      if (id) {
        const idx = inventory.findIndex(p => p.id === id);
        if (idx !== -1) {
          inventory[idx] = {
            ...inventory[idx],
            name,
            category,
            price,
            stock,
            minStock,
            discount,
            expiryDate,
            lastAudit: { action: 'MODIFICADO', device, location, timestamp }
          };
          recordAuditEvent('MODIFICADO', name, `Stock: ${stock} uds • Precio: $${price.toLocaleString('es-CO')} COP ${discount > 0 ? `• Promo ${discount}%` : ''}`);
        }
      } else {
        const newProd = {
          id: 'prd-' + Date.now(),
          name,
          category,
          price,
          stock,
          minStock,
          discount,
          expiryDate,
          lastAudit: { action: 'CREADO', device, location, timestamp }
        };
        inventory.unshift(newProd);
        recordAuditEvent('CREADO', name, `Ingreso inicial: ${stock} uds • $${price.toLocaleString('es-CO')} COP`);
      }

      // Si tiene descuento promocional, notificar automáticamente a los compradores de la red
      if (discount > 0) {
        notifications.unshift({
          id: 'not-' + Date.now(),
          supplierId: 'sup-1',
          supplierName: currentUser.business,
          city: location,
          text: `¡Promoción activa! ${discount}% de descuento en "${name}" ($${price.toLocaleString('es-CO')} COP).`,
          time: 'Ahora mismo',
          unread: true
        });
        renderNotifications();
        showToast("Promoción Publicada y Notificada", `Los compradores recibieron una alerta sobre el ${discount}% de descuento en ${name}.`);
      } else {
        showToast("Inventario Actualizado", `Cambio auditado desde ${device} en ${location}.`);
      }

      saveUserData();
      renderInventory();
      updateKPIs();
      closeProductModal();
    }

    function deleteProduct(productId) {
      const idx = inventory.findIndex(p => p.id === productId);
      if (idx === -1) return;
      const removed = inventory[idx];
      inventory.splice(idx, 1);

      recordAuditEvent('ELIMINADO', removed.name, `Archivo/registro eliminado permanentemente del inventario (${removed.category})`);
      saveUserData();
      renderInventory();
      updateKPIs();
      showToast("Registro Eliminado con Auditoría", `Se registró el dispositivo, lugar (${currentUser.city}) y hora exacta de eliminación.`);
    }

    function localDateOnly(date = new Date()) {
      const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      return d;
    }

    function getExpiryState(product) {
      if (!product.expiryDate) return { state: 'none', days: null };
      const today = localDateOnly();
      const expiry = new Date(`${product.expiryDate}T00:00:00`);
      const days = Math.round((expiry - today) / 86400000);
      if (days < 0) return { state: 'expired', days };
      if (days <= 30) return { state: 'expiring', days };
      return { state: 'future', days };
    }

    function setInventoryView(view) {
      inventoryView = view;
      document.querySelectorAll('.inventory-filter-tab').forEach(btn => {
        btn.className = 'inventory-filter-tab px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
      });
      const active = document.getElementById(`inventory-tab-${view}`);
      if (active) active.className = 'inventory-filter-tab px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white';
      const captions = {
        all: 'Consulta todos los productos e insumos registrados.',
        expiring: 'Solo aparecen productos que vencen hoy o dentro de los próximos 30 días. El vencimiento más cercano aparece primero.',
        expired: 'Se muestran los productos vencidos, comenzando por el que lleva más tiempo vencido.'
      };
      document.getElementById('inventory-view-caption').textContent = captions[view];
      renderInventory();
    }

    function renderInventory() {
      const tbody = document.getElementById('inventory-table-body');
      const searchInput = document.getElementById('inventory-search');
      const query = (searchInput?.value || '').toLowerCase().trim();
      let filtered = inventory.filter(p =>
        (p.name || '').toLowerCase().includes(query) ||
        (p.category || '').toLowerCase().includes(query)
      );

      if (inventoryView === 'expiring') {
        filtered = filtered.filter(p => getExpiryState(p).state === 'expiring')
          .sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
      } else if (inventoryView === 'expired') {
        filtered = filtered.filter(p => getExpiryState(p).state === 'expired')
          .sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
      }

      if (filtered.length === 0) {
        const emptyMessage = inventoryView === 'expiring'
          ? 'No hay productos que venzan dentro de los próximos 30 días.'
          : inventoryView === 'expired'
            ? 'No hay productos vencidos registrados.'
            : 'No hay productos que coincidan con tu búsqueda. Registra un producto o insumo para comenzar.';
        tbody.innerHTML = `<tr><td colspan="6" class="py-10 text-center text-slate-500">${emptyMessage}</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(prod => {
        const isOut = prod.stock === 0;
        const isLow = prod.stock > 0 && prod.stock <= prod.minStock;
        const discountedPrice = prod.discount > 0 ? Math.round(prod.price * (1 - prod.discount / 100)) : prod.price;
        const expiry = getExpiryState(prod);
        let stockBadge = `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">${prod.stock} uds (Óptimo)</span>`;
        let replenishBtn = '';

        if (isOut) {
          stockBadge = `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300">Agotado (0)</span>`;
          replenishBtn = `<button onclick="findNearbySupplierForCategory('${String(prod.category).replace(/'/g, "\\'")}', '${String(prod.name).replace(/'/g, "\\'")}')" class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-bold">Buscar proveedor</button>`;
        } else if (isLow) {
          stockBadge = `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300">Bajo stock (${prod.stock} / mín. ${prod.minStock})</span>`;
          replenishBtn = `<button onclick="findNearbySupplierForCategory('${String(prod.category).replace(/'/g, "\\'")}', '${String(prod.name).replace(/'/g, "\\'")}')" class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 text-[11px] font-bold">Reabastecer</button>`;
        }

        let expiryHtml = '<span class="text-xs text-slate-400">No aplica / Sin fecha</span>';
        if (expiry.state === 'expired') {
          expiryHtml = `<span class="inline-flex flex-col text-xs font-bold text-rose-600 dark:text-rose-400">Vencido<br><span class="font-normal">${prod.expiryDate}</span></span>`;
        } else if (expiry.state === 'expiring') {
          expiryHtml = `<span class="inline-flex flex-col text-xs font-bold text-amber-600 dark:text-amber-400">Por vencer (${expiry.days === 0 ? 'hoy' : `en ${expiry.days} días`})<br><span class="font-normal">${prod.expiryDate}</span></span>`;
        } else if (expiry.state === 'future') {
          expiryHtml = `<span class="text-xs text-slate-600 dark:text-slate-300">${prod.expiryDate}</span>`;
        }

        return `
          <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
            <td class="py-3.5 px-4">
              <div class="font-bold text-slate-900 dark:text-white flex items-center gap-2"><span>${prod.name}</span>
                ${prod.discount > 0 ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-fuchsia-100 text-fuchsia-700">-${prod.discount}% PROMO</span>` : ''}
              </div>
              <span class="text-xs text-slate-500">${prod.category}</span>
            </td>
            <td class="py-3.5 px-4">${prod.discount > 0
              ? `<div class="text-xs line-through text-slate-400">$${prod.price.toLocaleString('es-CO')} COP</div><div class="font-bold text-emerald-600">$${discountedPrice.toLocaleString('es-CO')} COP</div>`
              : `<div class="font-bold">$${prod.price.toLocaleString('es-CO')} COP</div>`}</td>
            <td class="py-3.5 px-4"><div>${stockBadge}</div>${replenishBtn}</td>
            <td class="py-3.5 px-4">${expiryHtml}</td>
            <td class="py-3.5 px-4"><div class="text-xs space-y-0.5 text-slate-600 dark:text-slate-300">
              <div class="font-semibold text-indigo-600 dark:text-indigo-400">${prod.lastAudit?.device || 'Registro anterior'}</div>
              <div>${prod.lastAudit?.location || ''}</div>
              <div class="text-[11px] text-slate-400">${prod.lastAudit?.timestamp || ''} ${prod.lastAudit?.action || ''}</div>
            </div></td>
            <td class="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
              <button onclick="openProductModal('${prod.id}')" title="Modificar producto" class="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs"><i class="fa-solid fa-pen-to-square"></i></button>
              <button onclick="deleteProduct('${prod.id}')" title="Eliminar registro" class="px-2.5 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-600 text-xs"><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>`;
      }).join('');
    }

    function renderAuditLogs() {
      const list = document.getElementById('audit-log-list');
      list.innerHTML = auditLogs.map(log => {
        let badgeStyle = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
        let icon = 'fa-plus-circle';
        if (log.actionType === 'MODIFICADO') {
          badgeStyle = 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300';
          icon = 'fa-pen';
        } else if (log.actionType === 'ELIMINADO') {
          badgeStyle = 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300';
          icon = 'fa-trash-can';
        }

        return `
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div class="space-y-0.5">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-md font-bold text-[10px] ${badgeStyle}"><i class="fa-solid ${icon} mr-1"></i>${log.actionType}</span>
                <strong class="text-slate-900 dark:text-white">${log.itemName}</strong>
              </div>
              <p class="text-slate-500 dark:text-slate-400">${log.details}</p>
            </div>
            <div class="sm:text-right text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
              <div class="font-semibold text-slate-700 dark:text-slate-200"><i class="fa-solid fa-desktop mr-1 text-indigo-500"></i>${log.device}</div>
              <div><i class="fa-solid fa-location-dot mr-1 text-emerald-500"></i>${log.location} • <span>${log.timestamp}</span></div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 10. REPOSICIÓN CERCANA Y DIRECTORIO DE PROVEEDORES CON MAPA Y CHAT
    function findNearbySupplierForCategory(category, productName) {
      nearbyCategoryFilter = category;
      switchSection('directory');
      const banner = document.getElementById('nearby-filter-banner');
      document.getElementById('nearby-filter-text').textContent = `Reposición urgente para "${productName}" (${category}) cerca de ${currentUser.city}`;
      banner.classList.remove('hidden');
      banner.classList.add('flex');
      renderSuppliers();
    }

    function clearNearbyFilter() {
      nearbyCategoryFilter = null;
      const banner = document.getElementById('nearby-filter-banner');
      banner.classList.add('hidden');
      banner.classList.remove('flex');
      renderSuppliers();
    }

    function ensureSuppliersMap() {
      const mapElement = document.getElementById('suppliers-leaflet-map');
      if (!mapElement || !window.L) {
        const status = document.getElementById('supplier-map-status');
        if (status) status.textContent = 'No se pudo cargar el mapa. Revisa tu conexión a internet.';
        return false;
      }

      if (!suppliersLeafletMap) {
        suppliersLeafletMap = L.map(mapElement, {
          scrollWheelZoom: true,
          zoomControl: true
        }).setView([4.5709, -74.2973], 5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
        }).addTo(suppliersLeafletMap);
      }

      window.setTimeout(() => suppliersLeafletMap && suppliersLeafletMap.invalidateSize(), 120);
      return true;
    }

    function updateSupplierMap(list, cityQuery = '') {
      const status = document.getElementById('supplier-map-status');
      if (!ensureSuppliersMap()) return;

      supplierMapMarkers.forEach(marker => suppliersLeafletMap.removeLayer(marker));
      supplierMapMarkers = [];

      list.forEach(sup => {
        if (!Number.isFinite(Number(sup.lat)) || !Number.isFinite(Number(sup.lng))) return;
        const color = sup.promoDiscount > 0 ? '#f59e0b' : (sup.role === 'Mayorista' ? '#6366f1' : '#10b981');
        const markerIcon = L.divIcon({
          className: 'mercaflow-map-marker',
          html: `<div style="width:18px;height:18px;border:3px solid white;border-radius:50%;background:${color};box-shadow:0 2px 8px #0008"></div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9]
        });
        const marker = L.marker([Number(sup.lat), Number(sup.lng)], { icon: markerIcon })
          .addTo(suppliersLeafletMap)
          .bindPopup(`<div style="min-width:170px"><strong>${escapeMapText(sup.name)}</strong><br>${escapeMapText(sup.city)}, ${escapeMapText(sup.department)}<br><small>${escapeMapText(sup.starProduct)}</small><br><button style="margin-top:8px;background:#4f46e5;color:white;padding:5px 9px;border-radius:7px" onclick="openChatWithSupplier('${sup.id}')">Contactar proveedor</button></div>`);
        supplierMapMarkers.push(marker);
      });

      if (currentGpsMarker) currentGpsMarker.addTo(suppliersLeafletMap);

      const points = supplierMapMarkers.map(marker => marker.getLatLng());
      if (points.length) {
        if (points.length === 1) suppliersLeafletMap.setView(points[0], 11);
        else suppliersLeafletMap.fitBounds(L.latLngBounds(points).pad(0.18), { maxZoom: 10 });
        if (status) status.textContent = `${points.length} proveedor(es) encontrados en el mapa`;
      } else {
        const city = (cityQuery || '').trim();
        if (city) geocodeAndCenterCity(city);
        else suppliersLeafletMap.setView([4.5709, -74.2973], 5);
        if (status) status.textContent = 'No hay proveedores registrados que coincidan con esta búsqueda.';
      }
    }

    function escapeMapText(value) {
      return String(value ?? '').replace(/[&<>"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
      }[ch]));
    }

    async function geocodeAndCenterCity(cityName) {
      if (!suppliersLeafletMap || !cityName) return;
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&country=Colombia&city=${encodeURIComponent(cityName)}`;
        const response = await fetch(url, { headers: { 'Accept-Language': 'es' } });
        if (!response.ok) throw new Error('No fue posible consultar la ciudad.');
        const results = await response.json();
        if (results.length) {
          suppliersLeafletMap.setView([Number(results[0].lat), Number(results[0].lon)], 10);
        }
      } catch (error) {
        console.warn('Geocodificación de ciudad no disponible:', error);
      }
    }

    function locateCurrentPosition() {
      const status = document.getElementById('supplier-map-status');
      if (!navigator.geolocation) {
        if (status) status.textContent = 'Este navegador no permite geolocalización.';
        return;
      }
      if (!ensureSuppliersMap()) return;
      if (status) status.textContent = 'Solicitando permiso para acceder a tu ubicación…';

      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = Math.round(position.coords.accuracy);
        const point = [lat, lng];

        if (currentGpsMarker) suppliersLeafletMap.removeLayer(currentGpsMarker);
        currentGpsMarker = L.circleMarker(point, {
          radius: 9, color: '#ffffff', weight: 3, fillColor: '#2563eb', fillOpacity: 1
        }).addTo(suppliersLeafletMap).bindPopup(`Tu ubicación aproximada<br>Precisión: ${accuracy} m`);
        suppliersLeafletMap.setView(point, 12);
        currentGpsMarker.openPopup();
        if (status) status.textContent = `Ubicación GPS obtenida (precisión aprox. ${accuracy} m).`;
      }, error => {
        const messages = {
          1: 'Permiso de ubicación denegado. Actívalo en el navegador.',
          2: 'No se pudo determinar tu ubicación actual.',
          3: 'La solicitud de ubicación tardó demasiado.'
        };
        if (status) status.textContent = messages[error.code] || 'No fue posible obtener tu ubicación.';
      }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
    }

    function renderSuppliers() {
      const grid = document.getElementById('suppliers-grid');
      if (!grid) return;
      const searchEl = document.getElementById('dir-search');
      const search = (searchEl?.value || '').toLowerCase().trim();
      const roleFilter = document.getElementById('dir-role')?.value || 'ALL';
      const deptFilter = document.getElementById('dir-department')?.value || 'ALL';
      const cityFilter = document.getElementById('dir-city')?.value || 'ALL';

      let list = [...SUPPLIERS_DB].sort((a, b) => {
        const aSameCity = a.city === currentUser?.city ? 2 : (a.department === currentUser?.department ? 1 : 0);
        const bSameCity = b.city === currentUser?.city ? 2 : (b.department === currentUser?.department ? 1 : 0);
        return bSameCity - aSameCity;
      });

      list = list.filter(sup => {
        const searchable = [
          sup.name, sup.starProduct, sup.city, sup.department,
          ...(sup.categories || [])
        ].join(' ').toLowerCase();
        const matchSearch = !search || searchable.includes(search);
        const matchRole = roleFilter === 'ALL' || sup.role === roleFilter;
        const matchDept = deptFilter === 'ALL' || sup.department === deptFilter;
        const matchCity = cityFilter === 'ALL' || sup.city === cityFilter;
        const matchNearbyCat = !nearbyCategoryFilter ||
          (sup.categories || []).some(category => category.toLowerCase().includes(nearbyCategoryFilter.toLowerCase())) ||
          sup.starProduct.toLowerCase().includes(nearbyCategoryFilter.toLowerCase());
        return matchSearch && matchRole && matchDept && matchCity && matchNearbyCat;
      });

      // Si se escribe una ciudad en el buscador, el mapa se centra en esa ciudad
      // y muestra los proveedores que coincidan con ella.
      const typedCity = SUPPLIERS_DB.some(s => s.city.toLowerCase() === search)
        ? searchEl.value.trim() : '';
      updateSupplierMap(list, typedCity || (cityFilter !== 'ALL' ? cityFilter : ''));

      if (list.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
            No se encontraron proveedores para esa ciudad o producto en el directorio disponible. Prueba otra búsqueda o amplía los filtros.
          </div>`;
        return;
      }

      grid.innerHTML = list.map(sup => {
        const isLocal = sup.city === currentUser?.city || sup.department === currentUser?.department;
        return `
          <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600 transition flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2">
                <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${sup.role === 'Mayorista' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'}">${sup.role}</span>
                <div class="flex items-center gap-1.5">
                  ${isLocal ? `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"><i class="fa-solid fa-near-me mr-1"></i>Cercano</span>` : ''}
                  ${sup.promoDiscount > 0 ? `<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">-${sup.promoDiscount}% DTO</span>` : ''}
                </div>
              </div>
              <h4 class="font-display font-bold text-base mt-2.5 text-slate-900 dark:text-white">${escapeMapText(sup.name)}</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1"><i class="fa-solid fa-location-dot text-emerald-500"></i> ${escapeMapText(sup.city)}, ${escapeMapText(sup.department)}</p>
              <div class="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs">
                <span class="text-slate-400 block text-[10px] uppercase font-bold">Producto destacado</span>
                <span class="font-semibold text-slate-700 dark:text-slate-200">${escapeMapText(sup.starProduct)}</span>
              </div>
            </div>
            <button onclick="openChatWithSupplier('${sup.id}')" class="mt-4 w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition flex items-center justify-center gap-2">
              <i class="fa-solid fa-comments"></i><span>Chatear con proveedor</span>
            </button>
          </div>`;
      }).join('');
    }

    // 11. CHAT DIRECTO EN VIVO ENTRE COMPRADORES, MAYORISTAS Y MINORISTAS
    function openChatWithSupplier(supplierId) {
      const sup = SUPPLIERS_DB.find(s => s.id === supplierId);
      if (!sup) return;
      activeChatSupplier = sup;

      document.getElementById('chat-supplier-name').textContent = sup.name;
      document.getElementById('chat-supplier-role').textContent = sup.role;
      document.getElementById('chat-supplier-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${sup.city}, ${sup.department}`;
      document.getElementById('chat-avatar').textContent = sup.name.slice(0, 2).toUpperCase();

      if (!chatHistories[sup.id]) {
        chatHistories[sup.id] = [
          {
            sender: 'them',
            text: `¡Hola ${currentUser.business}! Somos ${sup.name} desde ${sup.city}. Tenemos stock disponible de ${sup.starProduct}${sup.promoDiscount > 0 ? ` con ${sup.promoDiscount}% de descuento activo hoy` : ''}. ¿En qué te podemos colaborar?`,
            time: getFormattedTimestamp().slice(11, 16)
          }
        ];
      }

      renderChatMessages();
      document.getElementById('chat-modal').classList.remove('hidden');
    }

    function closeChatModal() {
      document.getElementById('chat-modal').classList.add('hidden');
      activeChatSupplier = null;
    }

    function sendQuickChat(text) {
      if (!activeChatSupplier) return;
      pushChatMessage(text);
    }

    function handleChatSend(e) {
      e.preventDefault();
      const input = document.getElementById('chat-input');
      const text = input.value.trim();
      if (!text || !activeChatSupplier) return;
      input.value = '';
      pushChatMessage(text);
    }

    function pushChatMessage(text) {
      const sup = activeChatSupplier;
      const timeStr = getFormattedTimestamp().slice(11, 16);
      chatHistories[sup.id].push({ sender: 'me', text, time: timeStr });
      renderChatMessages();
      saveUserData();

      // Respuesta automática contextual del proveedor
      setTimeout(() => {
        if (!activeChatSupplier || activeChatSupplier.id !== sup.id) return;
        const reply = `Recibido, ${currentUser.business}. Nuestro asesor comercial en ${sup.city} acaba de reservar inventario para despacho hacia ${currentUser.city} (${currentUser.department}). ¿Deseas que te enviemos la orden proforma por aquí?`;
        chatHistories[sup.id].push({ sender: 'them', text: reply, time: getFormattedTimestamp().slice(11, 16) });
        renderChatMessages();
        saveUserData();
      }, 750);
    }

    function renderChatMessages() {
      const container = document.getElementById('chat-messages');
      const msgs = chatHistories[activeChatSupplier.id] || [];
      container.innerHTML = msgs.map(m => {
        const isMe = m.sender === 'me';
        return `
          <div class="flex ${isMe ? 'justify-end' : 'justify-start'}">
            <div class="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
              isMe
                ? 'bg-indigo-600 text-white rounded-br-sm'
                : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-bl-sm'
            }">
              <p>${m.text}</p>
              <span class="block text-[10px] mt-1 opacity-70 text-right">${m.time}</span>
            </div>
          </div>
        `;
      }).join('');
      container.scrollTop = container.scrollHeight;
    }

    // 12. CENTRO DE NOTIFICACIONES DE PROMOCIONES
    function toggleNotificationsPanel() {
      const dd = document.getElementById('notifications-dropdown');
      dd.classList.toggle('hidden');
    }

    function markAllNotificationsRead() {
      notifications.forEach(n => n.unread = false);
      saveUserData();
      renderNotifications();
    }

    function renderNotifications() {
      const list = document.getElementById('notifications-list');
      const badge = document.getElementById('notif-badge');
      const unreadCount = notifications.filter(n => n.unread).length;

      badge.textContent = unreadCount;
      badge.classList.toggle('hidden', unreadCount === 0);

      if (notifications.length === 0) {
        list.innerHTML = `<div class="p-6 text-center text-xs text-slate-500">No hay alertas de promoción recientes.</div>`;
        return;
      }

      list.innerHTML = notifications.map(n => `
        <div class="p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition ${n.unread ? 'bg-indigo-50/40 dark:bg-indigo-950/20' : ''}">
          <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span class="font-bold text-indigo-600 dark:text-indigo-400">${n.supplierName}</span>
            <span>${n.time}</span>
          </div>
          <p class="text-xs text-slate-700 dark:text-slate-200">${n.text}</p>
          <div class="mt-2 flex items-center justify-between">
            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-location-dot mr-1"></i>${n.city}</span>
            <button onclick="toggleNotificationsPanel(); openChatWithSupplier('${n.supplierId}')" class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
              Chatear por oferta →
            </button>
          </div>
        </div>
      `).join('');
    }

    // Selector para agregar, quitar o reemplazar ciudades del gráfico de demanda.
    function initAnalyticsCityEditor() {
      const deptSelect = document.getElementById('analytics-department-select');
      if (!deptSelect) return;
      deptSelect.innerHTML = Object.keys(COLOMBIA_GEO).sort((a,b)=>a.localeCompare(b,'es')).map(dep =>
        `<option value="${dep}">${dep}</option>`).join('');
      try {
        const saved = JSON.parse(localStorage.getItem('mercaflow_analytics_cities') || 'null');
        analyticsSelectedCities = Array.isArray(saved) && saved.length ? saved : [
          { city: 'Bogotá D.C.', department: 'Bogotá D.C.' },
          { city: 'Cali', department: 'Valle del Cauca' },
          { city: 'Medellín', department: 'Antioquia' },
          { city: 'Barranquilla', department: 'Atlántico' }
        ];
      } catch (_) {
        analyticsSelectedCities = [
          { city: 'Bogotá D.C.', department: 'Bogotá D.C.' },
          { city: 'Cali', department: 'Valle del Cauca' },
          { city: 'Medellín', department: 'Antioquia' },
          { city: 'Barranquilla', department: 'Atlántico' }
        ];
      }
      populateAnalyticsCities();
      renderAnalyticsCityChips();
    }

    function populateAnalyticsCities() {
      const department = document.getElementById('analytics-department-select')?.value;
      const citySelect = document.getElementById('analytics-city-select');
      if (!citySelect || !department) return;
      citySelect.innerHTML = (COLOMBIA_GEO[department] || []).map(city =>
        `<option value="${city}">${city}</option>`).join('');
    }

    function persistAnalyticsCities() {
      localStorage.setItem('mercaflow_analytics_cities', JSON.stringify(analyticsSelectedCities));
      renderAnalyticsCityChips();
      renderAnalyticsCharts();
    }

    function addAnalyticsCity() {
      const department = document.getElementById('analytics-department-select')?.value;
      const city = document.getElementById('analytics-city-select')?.value;
      if (!department || !city) return;
      if (analyticsSelectedCities.some(row => row.city === city && row.department === department)) {
        showToast('Ciudad ya agregada', `${city} ya está incluida en el gráfico.`);
        return;
      }
      analyticsSelectedCities.push({ city, department });
      persistAnalyticsCities();
    }

    function removeAnalyticsCity(index) {
      analyticsSelectedCities.splice(index, 1);
      persistAnalyticsCities();
    }

    function replaceAnalyticsCity(index, value) {
      const [city, department] = value.split('||');
      if (!city || !department) return;
      if (analyticsSelectedCities.some((row, i) => i !== index && row.city === city && row.department === department)) {
        showToast('Ciudad repetida', 'Esa ciudad ya está seleccionada.');
        renderAnalyticsCityChips();
        return;
      }
      analyticsSelectedCities[index] = { city, department };
      persistAnalyticsCities();
    }

    function renderAnalyticsCityChips() {
      const container = document.getElementById('analytics-selected-cities');
      if (!container) return;
      if (!analyticsSelectedCities.length) {
        container.innerHTML = '<span class="text-xs text-slate-500">No hay ciudades seleccionadas. Agrega al menos una para visualizar el gráfico.</span>';
        return;
      }
      const allCities = Object.entries(COLOMBIA_GEO).flatMap(([department, cities]) =>
        cities.map(city => ({ city, department })));
      container.innerHTML = analyticsSelectedCities.map((row, index) => `
        <div class="flex flex-wrap items-center gap-2 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950">
          <span class="text-xs font-bold">${row.city}</span>
          <span class="text-[10px] text-slate-500">${row.department}</span>
          <select aria-label="Cambiar ciudad ${row.city}" onchange="replaceAnalyticsCity(${index}, this.value)" class="text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-1">
            <option value="">Cambiar ciudad…</option>
            ${allCities.map(item => `<option value="${item.city}||${item.department}" ${item.city===row.city && item.department===row.department?'selected':''}>${item.city} · ${item.department}</option>`).join('')}
          </select>
          <button type="button" onclick="removeAnalyticsCity(${index})" aria-label="Quitar ${row.city}" class="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-950/50 text-rose-600"><i class="fa-solid fa-xmark"></i></button>
        </div>`).join('');
    }

    // 13. ANALÍTICA DE LO MÁS VENDIDO (CHART.JS)
    function renderAnalyticsCharts() {
      const ctx1 = document.getElementById('topProductsChart');
      const ctx2 = document.getElementById('citiesDemandChart');
      if (!ctx1 || !ctx2) return;

      if (topProductsChartInstance) topProductsChartInstance.destroy();
      if (citiesChartInstance) citiesChartInstance.destroy();

      topProductsChartInstance = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: ['Café Especial', 'Arroz 50kg', 'Aceite Vegetal', 'Camisetas Algodón', 'Insumos Aseo'],
          datasets: [
            {
              label: 'Ventas Mayoristas (Unidades)',
              data: [1420, 1890, 1340, 980, 1150],
              backgroundColor: '#4f46e5',
              borderRadius: 8
            },
            {
              label: 'Ventas Minoristas (Unidades)',
              data: [890, 1120, 940, 760, 820],
              backgroundColor: '#10b981',
              borderRadius: 8
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } }
        }
      });

      const cityRows = analyticsSelectedCities.length ? analyticsSelectedCities : [
        { city: 'Bogotá D.C.', department: 'Bogotá D.C.' },
        { city: 'Cali', department: 'Valle del Cauca' },
        { city: 'Medellín', department: 'Antioquia' },
        { city: 'Barranquilla', department: 'Atlántico' }
      ];
      const cityValues = cityRows.map((row, index) => Math.max(5, 32 - index * 5));
      citiesChartInstance = new Chart(ctx2, {
        type: 'doughnut',
        data: {
          labels: cityRows.map(row => `${row.city} (${row.department})`),
          datasets: [{
            data: cityValues,
            backgroundColor: ['#4f46e5', '#10b981', '#f59e0b', '#06b6d4', '#ec4899', '#8b5cf6', '#14b8a6', '#f97316', '#a855f7', '#64748b'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } }
        }
      });
    }

    // 14. NAVEGACIÓN DE SECCIONES, KPIS, TOAST Y TEMA
    function switchSection(section) {
      ['inventory', 'directory', 'analytics'].forEach(sec => {
        document.getElementById(`section-${sec}`).classList.add('hidden');
        const dBtn = document.getElementById(`nav-${sec}`);
        const mBtn = document.getElementById(`m-nav-${sec}`);
        if (dBtn) dBtn.className = "nav-btn px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition";
        if (mBtn) mBtn.className = "flex-1 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400";
      });

      document.getElementById(`section-${section}`).classList.remove('hidden');
      if (section === 'directory') {
        renderSuppliers();
        window.setTimeout(() => suppliersLeafletMap && suppliersLeafletMap.invalidateSize(), 180);
      }
      const activeD = document.getElementById(`nav-${section}`);
      const activeM = document.getElementById(`m-nav-${section}`);
      if (activeD) activeD.className = "nav-btn px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm transition";
      if (activeM) activeM.className = "flex-1 py-2 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400";

      if (section === 'analytics') {
        renderAnalyticsCharts();
      }
    }

    function updateKPIs() {
      const isPro = currentUser.plan !== 'Gratis';
      document.getElementById('kpi-total-products').textContent = inventory.length;
      document.getElementById('kpi-plan-limit').textContent = isPro ? 'Ilimitado (Plan Pro)' : '/ 3 máx. (Gratis)';
      
      const lowOrOutCount = inventory.filter(p => p.stock === 0 || p.stock <= p.minStock).length;
      document.getElementById('kpi-low-stock').textContent = lowOrOutCount;
      document.getElementById('kpi-suppliers-count').textContent = SUPPLIERS_DB.length;
      document.getElementById('kpi-audit-count').textContent = auditLogs.length;
    }

    let toastTimeout = null;
    function showToast(title, message) {
      const toast = document.getElementById('global-toast');
      document.getElementById('toast-title').textContent = title;
      document.getElementById('toast-message').textContent = message;
      toast.classList.remove('hidden');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => toast.classList.add('hidden'), 5000);
    }

    function hideToast() {
      document.getElementById('global-toast').classList.add('hidden');
    }

    function toggleDarkMode() {
      const isDark = document.documentElement.classList.contains('dark');
      setThemeMode(isDark ? 'light' : 'dark');
    }

    // 15. AJUSTES DE APARIENCIA, TIPOGRAFÍA, MODO IA E INFORMACIÓN
    function loadUserPreferences() {
      const prefs = JSON.parse(localStorage.getItem('mercaflow_prefs') || '{}');
      // El tema claro es el predeterminado en acceso y dentro de la sesión.
      // El modo oscuro solo se restaura si el usuario lo eligió expresamente en Ajustes.
      const theme = prefs.themeManuallySet === true ? (prefs.theme || 'light') : 'light';
      const fontSize = prefs.fontSize || '16px';
      const fontWeight = prefs.fontWeight || '400';
      const fontFamily = prefs.fontFamily || "'Inter', sans-serif";
      aiModeEnabled = prefs.aiModeEnabled !== undefined ? prefs.aiModeEnabled : true;

      setThemeMode(theme, false);
      document.documentElement.style.setProperty('--app-font-size', fontSize);
      document.documentElement.style.setProperty('--app-font-weight', fontWeight);
      document.documentElement.style.setProperty('--app-font-family', fontFamily);

      const sizeSel = document.getElementById('setting-font-size');
      const weightSel = document.getElementById('setting-font-weight');
      const familySel = document.getElementById('setting-font-family');
      if (sizeSel) sizeSel.value = fontSize;
      if (weightSel) weightSel.value = fontWeight;
      if (familySel) familySel.value = fontFamily;

      updateAiAssistantUI();
    }

    function saveUserPreferences() {
      const previousPrefs = JSON.parse(localStorage.getItem('mercaflow_prefs') || '{}');
      const prefs = {
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
        themeManuallySet: previousPrefs.themeManuallySet === true,
        fontSize: document.getElementById('setting-font-size').value,
        fontWeight: document.getElementById('setting-font-weight').value,
        fontFamily: document.getElementById('setting-font-family').value,
        aiModeEnabled
      };
      localStorage.setItem('mercaflow_prefs', JSON.stringify(prefs));
    }

    function setThemeMode(mode, persist = true) {
      const html = document.documentElement;
      const btnLight = document.getElementById('btn-theme-light');
      const btnDark = document.getElementById('btn-theme-dark');

      // La transición se aplica al cambio manual, no al cargar la página.
      if (persist) {
        html.classList.remove('theme-animating');
        void html.offsetWidth;
        html.classList.add('theme-animating');
        window.clearTimeout(window.mercaflowThemeTransitionTimer);
        window.mercaflowThemeTransitionTimer = window.setTimeout(() => {
          html.classList.remove('theme-animating');
        }, 480);
      }

      if (mode === 'dark') {
        html.classList.add('dark');
        if (btnDark) btnDark.className = "px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-indigo-600 text-white shadow";
        if (btnLight) btnLight.className = "px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 text-slate-400 hover:text-white";
      } else {
        html.classList.remove('dark');
        if (btnLight) btnLight.className = "px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-indigo-600 text-white shadow";
        if (btnDark) btnDark.className = "px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900";
      }
      if (persist) {
        const prefs = JSON.parse(localStorage.getItem('mercaflow_prefs') || '{}');
        prefs.theme = mode;
        prefs.themeManuallySet = true;
        localStorage.setItem('mercaflow_prefs', JSON.stringify(prefs));
        saveUserPreferences();
      }
    }

    function applyTypographyFromControls() {
      const fontSize = document.getElementById('setting-font-size').value;
      const fontWeight = document.getElementById('setting-font-weight').value;
      const fontFamily = document.getElementById('setting-font-family').value;

      document.documentElement.style.setProperty('--app-font-size', fontSize);
      document.documentElement.style.setProperty('--app-font-weight', fontWeight);
      document.documentElement.style.setProperty('--app-font-family', fontFamily);
      saveUserPreferences();
    }

    function resetTypographySettings() {
      document.getElementById('setting-font-size').value = '16px';
      document.getElementById('setting-font-weight').value = '400';
      document.getElementById('setting-font-family').value = "'Inter', sans-serif";
      applyTypographyFromControls();
      showToast("Tipografía restablecida", "Se restauraron el tamaño, grosor y fuente predeterminados.");
    }

    function openSettingsModal(initialTab = 'prefs') {
      switchSettingsTab(initialTab);
      document.getElementById('settings-modal').classList.remove('hidden');
    }

    function closeSettingsModal() {
      document.getElementById('settings-modal').classList.add('hidden');
    }

    function switchSettingsTab(tab) {
      const prefsPanel = document.getElementById('settings-panel-prefs');
      const infoPanel = document.getElementById('settings-panel-info');
      const tabPrefs = document.getElementById('settings-tab-prefs');
      const tabInfo = document.getElementById('settings-tab-info');

      if (tab === 'info') {
        prefsPanel.classList.add('hidden');
        infoPanel.classList.remove('hidden');
        tabInfo.className = "px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 transition";
        tabPrefs.className = "px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition";
      } else {
        infoPanel.classList.add('hidden');
        prefsPanel.classList.remove('hidden');
        tabPrefs.className = "px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 transition";
        tabInfo.className = "px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition";
      }
    }

    function toggleAiMode(forcedState = null) {
      aiModeEnabled = forcedState !== null ? forcedState : !aiModeEnabled;
      saveUserPreferences();
      updateAiAssistantUI();
      showToast(
        aiModeEnabled ? "Modo IA Activado" : "Modo IA Desactivado",
        aiModeEnabled
          ? "El copiloto Ayuda IA está activo con sugerencias y respuestas estratégicas."
          : "Has ocultado el panel de IA. Puedes volver a activarlo en Ajustes."
      );
    }

    function updateAiAssistantUI() {
      const panel = document.getElementById('ai-assistant-panel');
      const toggleBtn = document.getElementById('btn-toggle-ai');

      if (toggleBtn) {
        if (aiModeEnabled) {
          toggleBtn.textContent = "Modo IA: Activado";
          toggleBtn.className = "shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white";
        } else {
          toggleBtn.textContent = "Modo IA: Desactivado";
          toggleBtn.className = "shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-sm bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200";
        }
      }

      if (panel) {
        panel.classList.toggle('hidden', !aiModeEnabled);
      }

      if (aiModeEnabled) {
        refreshAiMotivation();
        selectAiTopic(currentAiTopic);
      }
    }

    function refreshAiMotivation() {
      const tipEl = document.getElementById('ai-dynamic-tip');
      if (!tipEl) return;

      const lowItems = inventory.filter(p => p.stock === 0 || p.stock <= p.minStock);
      if (lowItems.length > 0 && currentTipIndex % 2 === 0) {
        tipEl.innerHTML = `<strong>Sugerencia IA en tiempo real:</strong> Detectamos <strong>${lowItems.length} producto(s)</strong> en stock bajo o agotado (${lowItems[0].name}). Haz clic en <em>"Buscar Proveedor Cercano"</em> para reabastecer en ${currentUser ? currentUser.city : 'tu ciudad'}.`;
      } else {
        tipEl.textContent = AI_SUPPORT_MESSAGES[currentTipIndex % AI_SUPPORT_MESSAGES.length];
      }
      currentTipIndex++;
    }

    function selectAiTopic(topicKey) {
      currentAiTopic = topicKey;
      const answerBox = document.getElementById('ai-topic-answer');
      if (answerBox && AI_STRATEGIC_ANSWERS[topicKey]) {
        answerBox.innerHTML = AI_STRATEGIC_ANSWERS[topicKey];
      }

      document.querySelectorAll('.ai-topic-btn').forEach(btn => {
        btn.className = "ai-topic-btn px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-slate-200 transition";
      });
      const activeBtn = document.getElementById(`ai-topic-${topicKey}`);
      if (activeBtn) {
        activeBtn.className = "ai-topic-btn px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white shadow transition";
      }
    }
