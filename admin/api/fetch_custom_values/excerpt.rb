@custom_value = @doc[@value] if @doc[@value] != nil and @doc[@value].kind_of? String
@custom_value = @doc['content'] if @custom_value == nil
