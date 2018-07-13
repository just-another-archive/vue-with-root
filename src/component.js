export default {
  functional: true,

  props: {
    unwrap: {
      type: Boolean,
      default: false,
    }
  },

  render(h, context) {
    const children = (context.children || [{ children: [] }])
      .filter(vnode => !!vnode.tag)
      .slice(0, 1)

    return !context.props.unwrap
         ? children[0]
         : children[0].children.filter(vnode => !!vnode.tag)
  }
}
