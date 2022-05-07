export default function createIntersectionObserver (elem, callback, options) {
	let observer = new IntersectionObserver(callback, options || {});
	observer.observe(elem);
	return observer;
}