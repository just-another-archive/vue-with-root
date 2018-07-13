export default {
  functional: true,

  props: {
    unwrap: {
      type: Boolean,
      default: false,
    }
  },

  render(h, context) {
    const firstchild = context.children
      .filter(vnode => !!vnode.tag)
      .pop()

    return !context.props.unwrap
         ? firstchild
         : firstchild.children.filter(vnode => !!vnode.tag).pop()
  }
}
