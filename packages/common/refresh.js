export function refresh(element, fn = () => { }) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.disconnect();
                fn();
            }
        });
    });
    observer.observe(element);
}