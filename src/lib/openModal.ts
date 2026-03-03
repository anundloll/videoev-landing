export type ModalType = 'advertiser' | 'partner';

export function openModal(type: ModalType) {
  window.dispatchEvent(new CustomEvent('videoev:openModal', { detail: { type } }));
}
