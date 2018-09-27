package com.theah64.shield.adapters;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.joanzapata.iconify.widget.IconTextView;
import com.theah64.shield.R;
import com.theah64.shield.api.responses.LoadHomeResponse;
import com.theah64.shield.pojos.GridMenuItem;
import com.theah64.shield.widget.MainCounter;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;

public class MainAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    private static final int VIEW_TYPE_HEAD = 699;
    private static final int VIEW_TYPE_BODY = 678;

    private final List<GridMenuItem> menuItems;
    private final LoadHomeResponse response;
    private final LayoutInflater inflater;

    public MainAdapter(final Context context, List<GridMenuItem> menuItems, LoadHomeResponse response) {
        this.menuItems = menuItems;
        this.inflater = LayoutInflater.from(context);
        this.response = response;
    }

    @NonNull
    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        if (viewType == VIEW_TYPE_HEAD) {
            View headLayout = inflater.inflate(R.layout.main_rv_header, parent, false);
            return new HeaderViewHolder(headLayout);
        } else {
            View menuItemLayout = inflater.inflate(R.layout.main_rv_menu_item, parent, false);
            return new MenuItemViewHolder(menuItemLayout);
        }
    }

    @Override
    public int getItemViewType(int position) {
        return position == 0 ? VIEW_TYPE_HEAD : VIEW_TYPE_BODY;
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
        if (holder instanceof HeaderViewHolder) {

            HeaderViewHolder header = (HeaderViewHolder) holder;
            header.mcVisitors.setCount(response.getTotalVisitorsIn());
            header.mvWorkers.setCount(response.getTotalWorkersIn());

        } else if (holder instanceof MenuItemViewHolder) {

            final GridMenuItem menuItem = menuItems.get(position);

            MenuItemViewHolder menuItemViewHolder = (MenuItemViewHolder) holder;
            menuItemViewHolder.tvTitle.setText(menuItem.getName());
            menuItemViewHolder.itvIcon.setText("{icon-shield}");
        }
    }

    @Override
    public int getItemCount() {
        return menuItems.size() + 1;
    }

    public class HeaderViewHolder extends RecyclerView.ViewHolder {

        @BindView(R.id.mcVisitors)
        MainCounter mcVisitors;

        @BindView(R.id.mcWorkers)
        MainCounter mvWorkers;

        public HeaderViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }

    public class MenuItemViewHolder extends RecyclerView.ViewHolder {

        @BindView(R.id.itvIcon)
        IconTextView itvIcon;

        @BindView(R.id.tvTitle)
        TextView tvTitle;

        public MenuItemViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }
}
