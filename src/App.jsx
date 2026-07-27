import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, ShoppingCart, Truck, RefreshCcw, 
  CreditCard, ShieldCheck, X, CheckCircle,
  Star, Quote, Phone, Mail, MapPin, ChevronRight,
  Plus, Minus, ArrowDownAZ, Filter, ChevronDown, Search, User
} from 'lucide-react';

const ToggleSwitch = ({ checked, onChange }) => (
  <div onClick={onChange} style={{
    width: 40, height: 22, borderRadius: 11, backgroundColor: checked ? '#e01a22' : '#ccc',
    position: 'relative', cursor: 'pointer', transition: '0.3s'
  }}>
    <div style={{
      width: 18, height: 18, borderRadius: '50%', backgroundColor: 'white',
      position: 'absolute', top: 2, left: checked ? 20 : 2, transition: '0.3s'
    }} />
  </div>
);

const FacebookIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>);
const InstagramIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>);
const TwitterIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>);
const LinkedinIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);

// Hero Slides
const HERO_SLIDES = [
  {
    id: 1,
    image: '/hero_banner_tesbih_1785145883641.png',
    badge: 'ÖZEL FIRSAT',
    title: '1 Alana\n1 Bedava',
    desc: 'Seçili ürünlerde geçerli özel kampanyayı keşfedin. Usta işçiliği ve kaliteli malzemeyle üretilen tesbih koleksiyonumuzu inceleyin.',
    btnText: 'FIRSATI İNCELE'
  },
  {
    id: 2,
    image: '/kehribar_tesbih_1785145892526.png',
    badge: 'YENİ SEZON',
    title: 'Kehribar\nŞıklığı',
    desc: 'Gerçek damla ve ateş kehribar tesbihlerde yeni sezon modelleri şimdi stoklarda. Kendinize veya sevdiklerinize özel.',
    btnText: 'KEŞFET'
  },
  {
    id: 3,
    image: '/kuka_tesbih_1785145903623.png',
    badge: 'KLASİK',
    title: 'Kuka\nUstalıktır',
    desc: 'Zamanla kararan ve değerlenen kuka tesbihler, usta ellerde hayat buluyor. Geleneksel sanatın en güzel örnekleri.',
    btnText: 'İNCELE'
  }
];

// Collection Data
const COLLECTIONS = [
  {
    id: 1,
    title: 'Kehribar\nTesbihler',
    subtitle: 'SEÇKİN KOLEKSİYON',
    price: 1500,
    image: '/kehribar_tesbih_1785145892526.png'
  },
  {
    id: 2,
    title: 'Kuka\nTesbihler',
    subtitle: 'SEÇKİN KOLEKSİYON',
    price: 850,
    image: '/kuka_tesbih_1785145903623.png'
  },
  {
    id: 3,
    title: 'Toz Kehribar\nTesbihler',
    subtitle: 'SEÇKİN KOLEKSİYON',
    price: 600,
    image: '/kehribar_tesbih_1785145892526.png'
  },
  {
    id: 4,
    title: '17\'lik Efe\nTesbih',
    subtitle: 'SEÇKİN KOLEKSİYON',
    price: 1200,
    image: '/hero_banner_tesbih_1785145883641.png'
  },
  {
    id: 5,
    title: '99\'luk\nTesbihler',
    subtitle: 'SEÇKİN KOLEKSİYON',
    price: 2100,
    image: '/kuka_tesbih_1785145903623.png'
  },
  {
    id: 6,
    title: 'Doğal Taş\nTesbihler',
    subtitle: 'SEÇKİN KOLEKSİYON',
    price: 950,
    image: '/hero_banner_tesbih_1785145883641.png'
  }
];

// Tab Products
const TAB_PRODUCTS = [
  {
    id: 101,
    title: 'Yarım Kapsül Tane Yapısı Gold',
    price: '3.499,00',
    image: '/damla_kehribar_1785147645782.png'
  },
  {
    id: 102,
    title: 'Usta Çalışma Eski Çin Oyun Taşı',
    price: '4.999,00',
    image: '/beyaz_oyun_tasi_1785147660804.png'
  },
  {
    id: 103,
    title: 'Özel Seri Ateş Kehribar',
    price: '1.250,00',
    image: '/kehribar_tesbih_1785145892526.png'
  },
  {
    id: 104,
    title: 'Gümüş Püsküllü Kuka',
    price: '850,00',
    image: '/kuka_tesbih_1785145903623.png'
  }
];

const CategoryProductCard = ({ product, onClick }) => {
  const [activeImg, setActiveImg] = useState(0);
  
  return (
    <div className="category-product-card" onClick={() => onClick({ ...product, price: parseFloat(product.price.replace('.', '').replace(',', '.')) })}>
      <div className="category-product-img-wrapper">
         <div className="card-image-slider" onScroll={(e) => {
            const scrollPos = e.target.scrollLeft;
            const width = e.target.offsetWidth;
            setActiveImg(Math.round(scrollPos / width));
         }}>
           <img src={product.image} alt={product.title} />
           <img src={product.image} alt={product.title + ' yan'} />
           <img src={product.image} alt={product.title + ' detay'} />
         </div>
         <div className="product-dots" style={{pointerEvents: 'none'}}>
           <span className={`dot ${activeImg === 0 ? 'active' : ''}`}></span>
           <span className={`dot ${activeImg === 1 ? 'active' : ''}`}></span>
           <span className={`dot ${activeImg === 2 ? 'active' : ''}`}></span>
         </div>
      </div>
      <div className="category-product-info">
        <h4 className="category-product-title">{product.title}</h4>
        <p className="category-product-price">₺{product.price}</p>
      </div>
    </div>
  );
};

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [inStock, setInStock] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState({});
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const [activeTab, setActiveTab] = useState('Çok Satanlar');
  const productSliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCategoryTitle, setCurrentCategoryTitle] = useState('Kehribar Tesbihler');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activePdpImage, setActivePdpImage] = useState(0);
  const [pdpLightboxOpen, setPdpLightboxOpen] = useState(false);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setActivePdpImage(0);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (e, title) => {
    if (e && e.preventDefault) e.preventDefault();
    setCurrentCategoryTitle(title);
    setCurrentView('category');
    setMenuOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (productSliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = productSliderRef.current;
        const child = productSliderRef.current.children[0];
        const scrollAmount = child ? child.clientWidth + 10 : 200;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          productSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          productSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3500); // Profesyonel ve okumaya/incelemeye uygun süre (3.5 saniye)
    
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = (menuName) => {
    setExpandedMenu(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);
  const cartCount = cart.reduce((count, item) => count + item.qty, 0);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      alert("Sepetiniz boş!");
      return;
    }

    if (!form.name || !form.phone || !form.address) {
      alert("Lütfen tüm zorunlu alanları (Ad, Telefon, Adres) eksiksiz doldurunuz.");
      return;
    }
    
    // Format WhatsApp Message
    let message = `Merhaba, sipariş vermek istiyorum.%0A%0A`;
    message += `*Alıcı Bilgileri:*%0A`;
    message += `İsim: ${form.name}%0A`;
    message += `Telefon: ${form.phone}%0A`;
    message += `Adres: ${form.address}%0A%0A`;
    
    message += `*Sipariş Detayı:*%0A`;
    cart.forEach(item => {
      message += `- ${item.qty}x ${item.title} (${item.price} TL)%0A`;
    });
    
    message += `%0A*Toplam Tutar: ${cartTotal} TL*`;
    
    // Replace with the actual WhatsApp number of the business
    const whatsappNumber = "905000000000"; 
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container flex justify-between items-center">
          <button className="icon-button" onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
          
          <div className="logo-text cursor-pointer" onClick={() => setCurrentView('home')}>
            <span className="logo-icon">T/S</span> TesbihShop
          </div>
          
          <div className="nav-menu">
            <a href="#koleksiyonlar" className="nav-link">Koleksiyonlar</a>
            <a href="#hakkimizda" className="nav-link">Hakkımızda</a>
            <a href="#iletisim" className="nav-link">İletişim</a>
          </div>

          <button className="icon-button" onClick={() => setCartOpen(true)}>
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>
      </header>

      {currentView === 'product' && selectedProduct ? (
        <div className="product-detail-page" style={{backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '4rem'}}>
          <div className="container" style={{padding: '1rem 15px'}}>
            <div className="mb-4" style={{fontSize: '0.85rem', color: '#666'}}>
              <span onClick={() => setCurrentView('home')} style={{cursor: 'pointer', color: '#e01a22'}}>⌂ Anasayfa</span> &gt; <span onClick={() => setCurrentView('category')} style={{cursor: 'pointer', color: '#e01a22'}}>{currentCategoryTitle}</span> &gt; {selectedProduct.title}
            </div>
            
            <div className="pdp-layout">
              <div className="pdp-gallery">
                <div className="pdp-main-image-container" onClick={() => setPdpLightboxOpen(true)} style={{position: 'relative', cursor: 'zoom-in', overflow: 'hidden'}}>
                  <button className="pdp-arrow left" onClick={(e) => { e.stopPropagation(); setActivePdpImage(prev => prev > 0 ? prev - 1 : 2); }}>
                    <ChevronRight size={24} style={{transform: 'rotate(180deg)'}} />
                  </button>
                  <img key={activePdpImage} src={selectedProduct.image} alt={selectedProduct.title} className="pdp-main-image pdp-anim-fade" />
                  <button className="pdp-arrow right" onClick={(e) => { e.stopPropagation(); setActivePdpImage(prev => prev < 2 ? prev + 1 : 0); }}>
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className="pdp-thumbnails">
                  {[0, 1, 2].map((idx) => (
                    <img 
                      key={idx} 
                      src={selectedProduct.image} 
                      className={`pdp-thumb ${activePdpImage === idx ? 'active' : ''}`} 
                      onClick={() => setActivePdpImage(idx)}
                      alt={`${selectedProduct.title} thumbnail ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {pdpLightboxOpen && (
                <div className="pdp-lightbox" onClick={() => setPdpLightboxOpen(false)}>
                  <div className="pdp-lightbox-content" onClick={(e) => e.stopPropagation()}>
                    <button className="pdp-lightbox-close" onClick={() => setPdpLightboxOpen(false)}>
                      <X size={32} color="white" />
                    </button>
                    <button className="pdp-lightbox-prev" onClick={() => setActivePdpImage((prev) => (prev > 0 ? prev - 1 : 2))}>
                      <ChevronRight size={40} color="white" style={{transform: 'rotate(180deg)'}} />
                    </button>
                    <img src={selectedProduct.image} alt="Enlarged" className="pdp-lightbox-image" />
                    <button className="pdp-lightbox-next" onClick={() => setActivePdpImage((prev) => (prev < 2 ? prev + 1 : 0))}>
                      <ChevronRight size={40} color="white" />
                    </button>
                    <div className="pdp-lightbox-dots">
                      {[0, 1, 2].map((idx) => (
                        <div key={idx} className={`pdp-lightbox-dot ${activePdpImage === idx ? 'active' : ''}`} onClick={() => setActivePdpImage(idx)} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="pdp-info">
                <h1 className="pdp-title">{selectedProduct.title}</h1>
                <div className="pdp-price">{selectedProduct.price} TL</div>
                
                <div className="pdp-features">
                  <div className="pdp-feature-item"><span className="feature-dot"></span><strong>Tane Boyutu:</strong> 8x12 mm</div>
                  <div className="pdp-feature-item"><span className="feature-dot"></span><strong>Kesim Türü:</strong> Arpa Kesim</div>
                  <div className="pdp-feature-item"><span className="feature-dot"></span><strong>Malzeme:</strong> Orijinal Kehribar</div>
                  <div className="pdp-feature-item"><span className="feature-dot"></span><strong>Püskül:</strong> 925 Ayar Gümüş</div>
                </div>
                
                <div className="pdp-actions">
                  <button className="btn btn-add-cart" onClick={() => addToCart(selectedProduct)}>SEPETE EKLE</button>
                  <button className="btn btn-whatsapp" onClick={() => {
                     const msg = `Merhaba, şu ürünü sipariş vermek istiyorum: ${selectedProduct.title} (${selectedProduct.price} TL)`;
                     window.open(`https://wa.me/905000000000?text=${msg}`, '_blank');
                  }}>HIZLI SİPARİŞ (WHATSAPP)</button>
                </div>
                
                <div className="pdp-accordions">
                  <details className="pdp-details" open>
                    <summary>Ürün Açıklaması</summary>
                    <p>Usta ellerden çıkmış, zamanla renk alacak orijinal tesbih. Koleksiyonunuza değer katacak bu parça, özel kutusunda gönderilmektedir.</p>
                  </details>
                  <details className="pdp-details">
                    <summary>Kargo ve İade Koşulları</summary>
                    <p>Tüm siparişlerde ücretsiz kargo. 15 gün içerisinde koşulsuz iade garantisi.</p>
                  </details>
                  <details className="pdp-details">
                    <summary>Güvenli Ödeme</summary>
                    <p>256-bit SSL sertifikası ile korunan ödeme altyapımız ile güvenle alışveriş yapabilirsiniz. Kapıda ödeme seçeneğimiz de mevcuttur.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : currentView === 'checkout' ? (
        <div className="checkout-page" style={{backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '2rem 0 4rem 0'}}>
          <div className="container">
            <div className="mb-4" style={{fontSize: '0.85rem', color: '#666'}}>
              <span onClick={() => setCurrentView('home')} style={{cursor: 'pointer', color: '#e01a22'}}>⌂ Anasayfa</span> &gt; Ödeme ve Sipariş
            </div>
            
            <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '2rem', color: '#111'}}>Siparişi Tamamla</h1>
            
            <div className="checkout-layout">
              <div className="checkout-form-section">
                <div className="checkout-card">
                  <h2 className="checkout-card-title"><User size={20} /> İletişim Bilgileri</h2>
                  <div className="form-group">
                    <label>Adınız Soyadınız *</label>
                    <input type="text" name="name" className="form-control" placeholder="Örn: Ahmet Yılmaz" required value={form.name} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Telefon Numaranız *</label>
                    <input type="tel" name="phone" className="form-control" placeholder="05XX XXX XX XX" required value={form.phone} onChange={handleInputChange} />
                  </div>
                </div>
                
                <div className="checkout-card mt-4">
                  <h2 className="checkout-card-title"><MapPin size={20} /> Teslimat Adresi</h2>
                  <div className="form-group">
                    <label>Açık Adresiniz *</label>
                    <textarea name="address" className="form-control" rows="3" placeholder="Mahalle, sokak, bina no, ilçe ve il bilgisi giriniz." required value={form.address} onChange={handleInputChange}></textarea>
                  </div>
                </div>
                
                <div className="checkout-card mt-4">
                  <h2 className="checkout-card-title"><CreditCard size={20} /> Ödeme Yöntemi</h2>
                  <div className="payment-method-box selected">
                    <div className="flex items-center gap-3">
                      <div className="radio-circle active"></div>
                      <span style={{fontWeight: '600'}}>WhatsApp ile Sipariş (Havale/EFT - Kapıda Ödeme)</span>
                    </div>
                    <p style={{fontSize: '0.85rem', color: '#666', marginTop: '0.5rem', marginLeft: '2rem'}}>
                      Siparişiniz WhatsApp üzerinden müşteri temsilcimize iletilecektir. Ödeme detaylarını ve kargo sürecini oradan onaylayabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="checkout-summary-section">
                <div className="checkout-card summary-sticky">
                  <h2 className="checkout-card-title"><ShoppingCart size={20} /> Sipariş Özeti</h2>
                  
                  <div className="checkout-items">
                    {cart.map(item => (
                      <div key={item.id} className="checkout-item">
                        <img src={item.image} alt={item.title} className="checkout-item-img" />
                        <div className="checkout-item-info">
                          <h4 className="checkout-item-title">{item.title}</h4>
                          <div className="checkout-item-price-qty">
                            <span>{item.qty} Adet</span>
                            <span className="font-bold">{item.price * item.qty} TL</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="checkout-totals">
                    <div className="checkout-total-row">
                      <span>Ara Toplam</span>
                      <span>{cartTotal} TL</span>
                    </div>
                    <div className="checkout-total-row">
                      <span>Kargo Ücreti</span>
                      <span style={{color: '#28a745'}}>Ücretsiz</span>
                    </div>
                    <div className="checkout-total-row final-total">
                      <span>Ödenecek Tutar</span>
                      <span className="text-gold" style={{fontWeight: '700', fontSize: '1.2rem'}}>{cartTotal} TL</span>
                    </div>
                  </div>
                  
                  <button onClick={handleCheckout} className="btn btn-whatsapp" style={{width: '100%', fontSize: '1.1rem', padding: '1.2rem'}}>
                    <Phone size={20} style={{marginRight: '8px', verticalAlign: 'text-bottom'}} /> SİPARİŞİ ONAYLA
                  </button>
                  <p style={{fontSize: '0.75rem', color: '#999', textAlign: 'center', marginTop: '1rem'}}>
                    Bilgileriniz 256-bit SSL sertifikası ile korunmaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : currentView === 'category' ? (
        <div className="category-page-container">
          <div style={{borderBottom: '1px solid #eee', backgroundColor: '#fff', display: 'flex', alignItems: 'center'}}>
            <input type="text" placeholder="ARAMA" style={{flex: 1, border: 'none', outline: 'none', fontSize: '0.9rem', color: '#333'}} />
            <Search size={20} color="#999" />
          </div>

          <div className="category-header-wrap" style={{width: '100%', maxWidth: '1200px', margin: '0 auto'}}>
            <div className="mb-2" style={{fontSize: '0.8rem', color: '#666'}}>
              <span onClick={() => setCurrentView('home')} style={{cursor: 'pointer'}}>⌂</span> &gt; ... &gt; {currentCategoryTitle}
            </div>
            <h1 className="category-title mb-4" style={{color: '#1a1a1a'}}>{currentCategoryTitle}</h1>
            <div className="flex justify-center" style={{gap: '2px', width: '100%'}}>
              <button className="btn-red-filter flex justify-center items-center gap-2" style={{width: '100%', maxWidth: '200px'}} onClick={() => setSortMenuOpen(!sortMenuOpen)}>
                <ArrowDownAZ size={18} /> SIRALAMA
              </button>
              <button className="btn-red-filter flex justify-center items-center gap-2" style={{width: '100%', maxWidth: '200px'}} onClick={() => setFilterDrawerOpen(true)}>
                <Filter size={18} /> FİLTRELEME
              </button>
            </div>
          </div>
          
          <div className="category-products-grid" style={{padding: 0, width: '100%'}}>
            {TAB_PRODUCTS.map(product => (
              <CategoryProductCard key={product.id} product={product} onClick={openProductDetail} />
            ))}
          </div>

          {/* Sort Menu Modal */}
          {sortMenuOpen && (
            <div className="sort-overlay" onClick={(e) => { if(e.target.className.includes('sort-overlay')) setSortMenuOpen(false) }}>
              <div className="sort-modal">
                 <div className="sort-item" onClick={() => setSortMenuOpen(false)}>Yeni Gelenler</div>
                 <div className="sort-item" onClick={() => setSortMenuOpen(false)}>Çok Satanlar</div>
                 <div className="sort-item" onClick={() => setSortMenuOpen(false)}>Fiyata Göre (Artan)</div>
                 <div className="sort-item" onClick={() => setSortMenuOpen(false)}>Fiyata Göre (Azalan)</div>
                 <div className="sort-item" onClick={() => setSortMenuOpen(false)}>Stoktakiler</div>
              </div>
            </div>
          )}

          {/* Filter Drawer */}
          <div className={`filter-overlay ${filterDrawerOpen ? 'open' : ''}`} onClick={(e) => { if(e.target.className.includes('filter-overlay')) setFilterDrawerOpen(false) }}>
            <div className="filter-drawer">
               <div className="filter-header">
                 <button onClick={() => setFilterDrawerOpen(false)}><X size={24} color="white" /></button>
                 <span className="filter-title-text">Filtreleme</span>
                 <div style={{width: 24}}></div>
               </div>
               <div className="filter-body">
                 <div className="filter-row flex justify-between items-center">
                   <span>Stoktakiler</span>
                   <ToggleSwitch checked={inStock} onChange={() => setInStock(!inStock)} />
                 </div>
                 
                 {['KATEGORİLER', 'FİLTRELER', 'MALZEME', 'BOYUT SINIFI', 'TANE ŞEKLİ', 'RENK', 'PÜSKÜL'].map(acc => (
                   <div key={acc} className="filter-accordion">
                     <span>{acc}</span>
                     <ChevronDown size={18} color="#e01a22" />
                   </div>
                 ))}

                 <div className="filter-price-range">
                   <div className="price-slider-bar">
                     <div className="price-slider-handle left"></div>
                     <div className="price-slider-handle right"></div>
                   </div>
                   <div className="price-values text-center mt-2 text-xs font-bold" style={{marginTop: '1rem'}}>
                     ₺598,00 - ₺23.000,00
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      ) : (
        <>
      {/* Hero Banner Slider */}
      <section className="hero">
        <div 
          className="hero-slider" 
          onScroll={(e) => {
            const scrollPos = e.target.scrollLeft;
            const slideWidth = e.target.offsetWidth;
            setCurrentSlide(Math.round(scrollPos / slideWidth));
          }}
        >
          {HERO_SLIDES.map((slide) => (
            <div key={slide.id} className="hero-slide">
              <img src={slide.image} alt="Tesbih Banner" className="hero-bg" />
              <div className="hero-gradient-overlay"></div>
              <div className="container" style={{ width: '100%', position: 'relative', zIndex: 10 }}>
                <div className="hero-content">
                  <span className="hero-badge">{slide.badge}</span>
                  <h1 className="hero-title">
                    {slide.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                  </h1>
                  <p className="hero-desc">{slide.desc}</p>
                  <a href="#urunler" className="btn btn-hero">
                    {slide.btnText} <ChevronRight size={14} style={{marginLeft: '0.25rem'}}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-dots">
          {HERO_SLIDES.map((_, idx) => (
            <div 
              key={idx} 
              className={`hero-dot ${currentSlide === idx ? 'active' : ''}`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container features-grid">
          <div className="feature-item">
            <Truck className="feature-icon" />
            <div className="feature-text">
              <h3 className="feature-title">Ücretsiz Kargo</h3>
              <p className="feature-desc">750 TL ve Üzeri</p>
            </div>
          </div>
          <div className="feature-item">
            <RefreshCcw className="feature-icon" />
            <div className="feature-text">
              <h3 className="feature-title">15 Gün İade</h3>
              <p className="feature-desc">Koşulsuz İade</p>
            </div>
          </div>
          <div className="feature-item">
            <ShieldCheck className="feature-icon" />
            <div className="feature-text">
              <h3 className="feature-title">Kapıda Ödeme</h3>
              <p className="feature-desc">Kapıda Nakit Ödeme</p>
            </div>
          </div>
          <div className="feature-item">
            <CreditCard className="feature-icon" />
            <div className="feature-text">
              <h3 className="feature-title">Peşin Fiyatına 3<br/>Taksit</h3>
              <p className="feature-desc">Avantajlı Ödeme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section id="koleksiyonlar" style={{ backgroundColor: 'white', paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="collections-grid">
            {COLLECTIONS.map(collection => (
              <div key={collection.id} className="collection-card">
                <img src={collection.image} alt={collection.title.replace('\n', ' ')} className="collection-image" />
                <div className="collection-overlay">
                  <div className="collection-content-box">
                    <span className="collection-subtitle">{collection.subtitle}</span>
                    <h3 className="collection-title">
                      {collection.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                    </h3>
                    <button onClick={(e) => handleCategoryClick(e, collection.title.replace('\n', ' '))} className="btn-incele">
                      İNCELE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Slider Section with Tabs */}
      <section style={{ backgroundColor: 'white', paddingBottom: '1rem', paddingTop: '2rem' }}>
        <div className="container" style={{ padding: '0 1rem' }}>
          
          <div className="product-tabs">
            {['Çok Satanlar', 'Kampanyalı Ürünler', 'Yeni Gelenler'].map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="product-slider" ref={productSliderRef}>
            {TAB_PRODUCTS.map(product => (
              <div key={product.id} className="product-slide-card" onClick={() => openProductDetail({ ...product, price: parseFloat(product.price.replace('.', '').replace(',', '.')) })}>
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-slide-info">
                  <h4 className="product-slide-title">{product.title}</h4>
                  <p className="product-slide-price">₺{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '2.5rem'}}>
            <p className="testi-pre-title">GERÇEK MÜŞTERİ DENEYİMLERİ</p>
            <h2 className="testi-title">Müşterilerimiz Ne Diyor?</h2>
            <div className="testi-divider"></div>
            <p className="testi-desc">TesbihShop'tan alışveriş yapan müşterilerimizin ürün,<br/>paketleme ve teslimat deneyimlerinden seçtiklerimiz.</p>
          </div>
          
          <div className="testimonials-slider">
            <div className="testimonial-slide-card">
              <Quote className="testi-quote-icon" size={32} />
              <div className="flex gap-1 justify-center" style={{marginBottom: '1rem'}}>
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#dda135" color="#dda135" />)}
              </div>
              <p className="testi-text">Çok şık ve güzel tasarım olmuş.</p>
              <p className="testi-product-name">3'lü Ahşap Kutuda Özel Püsküllü Toz Kehribar Tesbih Seti</p>
              <hr className="testi-hr" />
              <div className="testi-footer">
                <div>
                  <div className="testi-author">K** A**</div>
                  <div className="testi-verified">
                    <CheckCircle size={14} fill="#a71921" color="white" /> Doğrulanmış Alıcı
                  </div>
                </div>
                <div className="testi-date">15 Mayıs 2026</div>
              </div>
            </div>

            <div className="testimonial-slide-card">
              <Quote className="testi-quote-icon" size={32} />
              <div className="flex gap-1 justify-center" style={{marginBottom: '1rem'}}>
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#dda135" color="#dda135" />)}
              </div>
              <p className="testi-text">Harika bir işçilik. Kutusunun kalitesi harika.</p>
              <p className="testi-product-name">Gümüş Püsküllü Usta İşi Kuka Tesbih</p>
              <hr className="testi-hr" />
              <div className="testi-footer">
                <div>
                  <div className="testi-author">M** Y**</div>
                  <div className="testi-verified">
                    <CheckCircle size={14} fill="#a71921" color="white" /> Doğrulanmış Alıcı
                  </div>
                </div>
                <div className="testi-date">12 Mayıs 2026</div>
              </div>
            </div>

            <div className="testimonial-slide-card">
              <Quote className="testi-quote-icon" size={32} />
              <div className="flex gap-1 justify-center" style={{marginBottom: '1rem'}}>
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#dda135" color="#dda135" />)}
              </div>
              <p className="testi-text">Dokusu ve kokusu mükemmel, çok beğendim.</p>
              <p className="testi-product-name">Özel Seri Sistemli Ateş Kehribar</p>
              <hr className="testi-hr" />
              <div className="testi-footer">
                <div>
                  <div className="testi-author">A** K**</div>
                  <div className="testi-verified">
                    <CheckCircle size={14} fill="#a71921" color="white" /> Doğrulanmış Alıcı
                  </div>
                </div>
                <div className="testi-date">08 Mayıs 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Area */}
      <section className="info-section section-padding">
        <div className="container">
          <div className="info-content">
            <h2 className="section-title text-gold" style={{fontSize: '2rem'}}>Tesbih Modelleri ve Fiyatları</h2>
            <p>
              Tesbih, yüzyıllardır kültürümüzde önemli bir yere sahip olan, ustalık ve zarafetin sembolüdür. 
              Gerek koleksiyonerler gerekse günlük kullanım için tercih edilen tesbihler, kullanılan malzemeye ve 
              işçiliğe göre değişiklik gösterir.
            </p>
            <p>
              <strong>Kehribar Tesbihler:</strong> Doğal reçinenin fosilleşmesiyle oluşan kehribar, zamanla renk alması 
              ve elde bıraktığı kokusuyla bilinir. Ateş kehribar ve damla kehribar gibi çeşitleri, tesbih tutkunlarının gözdelerindendir.
            </p>
            <p>
              <strong>Kuka ve Doğal Taşlar:</strong> Tropikal bir ağaç meyvesinden elde edilen kuka, kullandıkça kararan 
              özel bir yapıya sahiptir. Akik, oltu ve ametist gibi doğal taşlar ise hem şıklığı hem de enerjisiyle öne çıkar.
            </p>
            <p style={{marginTop: '2rem', color: 'var(--secondary)'}}>
              <em>Usta ellerden çıkan birbirinden değerli koleksiyon parçalarını sitemizden güvenle sipariş verebilirsiniz.</em>
            </p>
          </div>
        </div>
      </section>

        </>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo-text" style={{color: 'white', marginBottom: '1.5rem'}}>
                <span className="logo-icon">T/S</span> TesbihShop
              </div>
              <p style={{color: '#999', marginBottom: '1.5rem'}}>
                Özel el işçiliği ile üretilen kaliteli tesbih modelleri, en uygun fiyat garantisiyle kapınızda.
              </p>
              <div className="flex gap-4">
                <a href="#">Instagram</a> |
                <a href="#">Facebook</a> |
                <a href="#">Twitter</a>
              </div>
            </div>
            
            <div className="footer-col">
              <h3>Hızlı Menü</h3>
              <ul>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">Teslimat ve İade</a></li>
                <li><a href="#">Gizlilik Politikası</a></li>
                <li><a href="#">Mesafeli Satış Sözleşmesi</a></li>
                <li><a href="#">Sıkça Sorulan Sorular</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>İletişim</h3>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <li className="flex items-center gap-4" style={{color: '#999'}}>
                  <MapPin size={20} color="var(--primary)" />
                  <span>Kapalıçarşı, İstanbul</span>
                </li>
                <li className="flex items-center gap-4" style={{color: '#999'}}>
                  <Phone size={20} color="var(--primary)" />
                  <span>+90 500 000 00 00</span>
                </li>
                <li className="flex items-center gap-4" style={{color: '#999'}}>
                  <Mail size={20} color="var(--primary)" />
                  <span>destek@TesbihShop.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} TesbihShop. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <div className={`drawer-overlay ${cartOpen ? 'open' : ''}`} onClick={(e) => {
        if(e.target.className.includes('drawer-overlay')) setCartOpen(false)
      }}>
        <div className="drawer">
          <div className="drawer-header">
            <h2>Sepetim ({cartCount})</h2>
            <button className="icon-button" onClick={() => setCartOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <div className="drawer-body">
            {cart.length === 0 ? (
              <div className="flex-col items-center justify-center h-full" style={{color: '#999', marginTop: '2rem'}}>
                <ShoppingCart size={48} style={{marginBottom: '1rem', opacity: 0.5}} />
                <p>Sepetiniz şu an boş.</p>
              </div>
            ) : (
              <div>
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <p className="cart-item-price">{item.price} TL</p>
                      
                      <div className="flex items-center gap-4" style={{marginTop: '0.5rem'}}>
                        <div className="flex items-center" style={{border: '1px solid #ddd', borderRadius: '4px'}}>
                          <button onClick={() => updateQty(item.id, -1)} style={{padding: '0.2rem 0.5rem', background: 'none', border: 'none', cursor: 'pointer'}}>-</button>
                          <span style={{padding: '0 0.5rem', fontSize: '0.9rem'}}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} style={{padding: '0.2rem 0.5rem', background: 'none', border: 'none', cursor: 'pointer'}}>+</button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          style={{background: 'none', border: 'none', color: '#dc3545', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline'}}
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="drawer-footer">
              <div className="cart-total" style={{marginBottom: '0.5rem'}}>
                <span>Ara Toplam:</span>
                <span className="text-gold" style={{fontSize: '1.4rem', fontWeight: '700'}}>{cartTotal} TL</span>
              </div>
              <div style={{fontSize: '0.85rem', color: '#28a745', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '500', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px'}}>
                <CheckCircle size={16} /> Kargo Ücretsiz
              </div>
              
              <button 
                className="btn btn-add-cart" 
                style={{width: '100%', padding: '1.2rem', marginBottom: '1rem', fontSize: '1.1rem'}}
                onClick={() => {
                  setCartOpen(false);
                  setCurrentView('checkout');
                  window.scrollTo(0, 0);
                }}
              >
                SİPARİŞİ TAMAMLA
              </button>
              
              <button 
                onClick={() => setCart([])} 
                style={{width: '100%', padding: '0.8rem', background: 'none', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', color: '#666'}}
              >
                Sepeti Boşalt
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menu Drawer */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={(e) => {
        if(e.target.className.includes('menu-overlay')) setMenuOpen(false)
      }}>
        <div className="menu-drawer">
          <div className="menu-header">
            <div className="flex gap-4" style={{marginLeft: '0.5rem', color: '#111'}}>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedinIcon />
            </div>
            <button className="icon-button" onClick={() => setMenuOpen(false)}>
              <X size={28} color="#111" strokeWidth={1.5} />
            </button>
          </div>
          <div className="menu-body">
            <ul className="menu-list">
              <li><a href="#" className="menu-item" onClick={(e) => handleCategoryClick(e, 'Yeni Gelenler')}>YENİ GELENLER</a></li>
              <li><a href="#" className="menu-item" onClick={(e) => handleCategoryClick(e, 'Çok Satanlar')}>ÇOK SATANLAR</a></li>
              
              <li>
                <div className="menu-item flex justify-between items-center" style={{cursor: 'pointer'}} onClick={(e) => handleCategoryClick(e, 'Kehribar Tesbihler')}>
                  KEHRİBAR TESBİHLER {expandedMenu['kehribar'] ? <Minus size={18} color="#666" onClick={(e) => { e.stopPropagation(); toggleMenu('kehribar'); }} /> : <Plus size={18} color="#666" onClick={(e) => { e.stopPropagation(); toggleMenu('kehribar'); }} />}
                </div>
                {expandedMenu['kehribar'] && (
                  <ul className="submenu-list">
                    <li><div className="submenu-item cursor-pointer" onClick={(e) => handleCategoryClick(e, 'Sıkma Kehribar')}>Sıkma Kehribar</div></li>
                    <li><div className="submenu-item cursor-pointer" onClick={(e) => handleCategoryClick(e, 'Ateş Kehribar')}>Ateş Kehribar</div></li>
                    <li><div className="submenu-item cursor-pointer" onClick={(e) => handleCategoryClick(e, 'Zar Kehribar')}>Zar Kehribar</div></li>
                    <li><div className="submenu-item cursor-pointer" onClick={(e) => handleCategoryClick(e, 'Damla Kehribar')}>Damla Kehribar</div></li>
                  </ul>
                )}
              </li>

              <li><a href="#" className="menu-item" onClick={(e) => handleCategoryClick(e, 'Kuka Tesbihler')}>KUKA TESBİHLER</a></li>
              <li><a href="#" className="menu-item" onClick={(e) => handleCategoryClick(e, 'Toz Kehribar Tesbihler')}>TOZ KEHRİBAR TESBİHLER</a></li>
              
              <li>
                <div className="menu-item flex justify-between items-center" style={{cursor: 'pointer'}} onClick={() => toggleMenu('tum')}>
                  TÜM TESBİHLER {expandedMenu['tum'] ? <Minus size={18} color="#666" /> : <Plus size={18} color="#666" />}
                </div>
                {expandedMenu['tum'] && (
                  <ul className="submenu-list">
                    <li><a href="#" className="submenu-item" onClick={(e) => handleCategoryClick(e, 'Ağaç Tesbihler')}>Ağaç Tesbihler</a></li>
                    <li><a href="#" className="submenu-item" onClick={(e) => handleCategoryClick(e, 'Doğal Taş Tesbihler')}>Doğal Taş Tesbihler</a></li>
                    <li><a href="#" className="submenu-item" onClick={(e) => handleCategoryClick(e, 'Gümüş Tesbihler')}>Gümüş Tesbihler</a></li>
                  </ul>
                )}
              </li>

              <li>
                <div className="menu-item flex justify-between items-center" style={{cursor: 'pointer'}} onClick={() => toggleMenu('kampanyalar')}>
                  KAMPANYALAR {expandedMenu['kampanyalar'] ? <Minus size={18} color="#666" /> : <Plus size={18} color="#666" />}
                </div>
                {expandedMenu['kampanyalar'] && (
                  <ul className="submenu-list">
                    <li><a href="#" className="submenu-item" onClick={(e) => handleCategoryClick(e, 'Fırsat Ürünleri')}>Fırsat Ürünleri</a></li>
                    <li><a href="#" className="submenu-item" onClick={(e) => handleCategoryClick(e, 'Günün İndirimi')}>Günün İndirimi</a></li>
                  </ul>
                )}
              </li>

              <li>
                <div className="menu-item flex justify-between items-center" style={{cursor: 'pointer'}} onClick={() => toggleMenu('diger')}>
                  DİĞER KATEGORİLER {expandedMenu['diger'] ? <Minus size={18} color="#666" /> : <Plus size={18} color="#666" />}
                </div>
                {expandedMenu['diger'] && (
                  <ul className="submenu-list">
                    <li><a href="#" className="submenu-item" onClick={(e) => handleCategoryClick(e, 'Tesbih Kutuları')}>Tesbih Kutuları</a></li>
                    <li><a href="#" className="submenu-item" onClick={(e) => handleCategoryClick(e, 'Gümüş Püsküller')}>Gümüş Püsküller</a></li>
                    <li><a href="#" className="submenu-item" onClick={(e) => handleCategoryClick(e, 'Koleksiyonluk Ürünler')}>Koleksiyonluk Ürünler</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
