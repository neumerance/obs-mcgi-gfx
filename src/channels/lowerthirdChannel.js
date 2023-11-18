const channel = new BroadcastChannel('lowerThirdChannel')

const lowerThirdChannel = (store) => {
  return {
    post: (message) => {
      channel.postMessage(message)
    },
    listen: () => {
      channel.onmessage = (event) => {
        const data = event.data
        store.onChange(data.field, data.content)
      };
    }
  }
}

export default lowerThirdChannel;
