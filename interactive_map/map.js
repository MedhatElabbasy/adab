const data = [
  {
    id: "north-america",
    message:
      " أمريكا الشمالية (الولايات المتحدة وكندا) اكتشاف الشيخ للتحديات والفرص التي يواجهها المسلمون في الغرب.",
  },
  {
    id: "brazil",
    message:
      "البرازيل التجربة البرازيلية: أعجب الشيخ العبودي بشدة بلطف الشعب البرازيلي وحسن تعاملهم مع الأجانب.المؤتمر الإسلامي في البرازيل (1970): شارك الشيخ في المؤتمر الهام الذي كان علامة تحول في تاريخ الدعوة الإسلامية بالبرازيل.",
  },
  {
    id: "arctic-ocean",
    message:
      "المحيط المتجمد الشمالي أدفأ يوم في المحيط المتجمد: لاحظ الشيخ أن أدفأ يوم في المحيط المتجمد الشمالي هو 22 يوليو بدرجة حرارة 3 درجات..",
  },
  {
    id: "africa",
    message:
      "أفريقيا  في أفريقيا الخضراء: أمضى الشيخ محمد ورفاقه حوالي ثلاثة أشهر في أفريقيا، مما أدى إلى تأليف كتابه في إفريقية الخضراء. أفريقيا - المتعة والغرابة: وصف الشيخ رحلاته إلى أفريقيا بأنها كانت مليئة بالمفاجآت والغرابة",
  },
  {
    id: "burundi",
    message:
      " بوز مبورا، بورندي حادثة فقدان الحقيبة في المطار: الشيخ محمد ومرافقه عبد الله الباحوث فقدا حقيبة في المطار، وأخبرهم موظف الجمرك بالعودة يوم الاثنين بسبب العطلة. لم يذكر العثور على الحقيبة، مع إشارة إلى سرقة البضائع من المطار..",
  },
  {
    id: "tanzania",
    message:
      "تنزانيا مشاهدات جبل كليمنجارو: رأى الشيخ ورفاقه جبل كليمنجارو، الأعلى في أفريقيا، من الطائرة بعد مغادرة مطار نيروبي .",
  },
  {
    id: "indian",
    message:
      "الهند الشيخ يتأمل التنوع الديني والثقافي في الهند، ويلاحظ تعايش الديانات المختلفة.",
  },
  {
    id: "astralia",
    message:
      "أستراليا زيارة الشيخ لمجتمعات المسلمين في أستراليا وإعجابه بتنوعها الثقافي وحفاظها على الهوية الإسلامية.",
  },
  {
    id: "japan",
    message:
      "اليابان اكتشاف الشيخ لوجود مسلمين في اليابان وتفاجئه بالجاليات الإسلامية المزدهرة في بلد مثل اليابان..",
  },
  {
    id: "bologna",
    message:
      " بولونيا في بولونيا قابل الشيخ العبودي الكثيرين من المسلمين في هذا البلد وكانوا يمارسون عباداتهم لكنها بطريقة عجيبة وغريبة، فقد كان إمامهم لا يعلم عدد ركعات صلاة الظهر وكان يصلي بالمسلمين هناك ركعتين..",
  },
  {
    id: "siberia",
    message:
      " سيبيريا سيبيريا وصلاة الجمعة الشهرية: في سيبيريا، وجد الشيخ أن المسلمين يصلون صلاة الجمعة مرة واحدة في الشهر وأن الشمس لا تغيب حتى بعد صلاة العشاء.",
  },
];

const svg = document.getElementById("world-map");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
document.addEventListener("click", hidePopup);

data.forEach((item) => {
  const textElement = document.getElementById(item.id);
  if (textElement) {
    textElement.addEventListener("click", (event) =>
      showPopup(event, item.message)
    );
  }
});

function showPopup(event, message) {
  const offsetX = -180;
  const offsetY = -200;

  const mouseX = event.clientX + window.pageXOffset;
  const mouseY = event.clientY + window.pageYOffset;

  popupMessage.textContent = message;
  popup.style.left = mouseX + offsetX + "px";
  popup.style.top = mouseY + offsetY + "px";
  popup.style.display = "block";
  event.stopPropagation();
}

function hidePopup() {
  popup.style.display = "none";
}


